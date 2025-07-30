<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller
{
    // ✅ تسجيل مستخدم جديد
    public function create(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role'     => 'admin', // تعيين دور المستخدم
        ]);

        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token
        ]);
    }

    // ✅ تسجيل الدخول
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json([
            'token' => $token,
        ]);
    }

    // ✅ جلب بيانات المستخدم الحالي
    public function user(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'user'  => $user,
        ]);
    }

    // ✅ تسجيل الخروج (إلغاء التوكن)
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }

                // تسجيل الدخول بواسطة ديسكورد
    public function discordCallback(Request $request)
    {
        $code = $request->query('code');

        if (!$code) {
            return response()->json(['error' => 'No code provided'], 400);
        }

        try {
            // Step 1: Get Access Token from Discord
            $tokenResponse = Http::asForm()->post('https://discord.com/api/oauth2/token', [
                'client_id' => config('app.discord_client_id'),
                'client_secret' => config('app.discord_client_secret'),
                'grant_type' => 'authorization_code',
                'code' => $code,
                'redirect_uri' => 'http://localhost:5173/discord/callback',
                'scope' => 'identify email',
            ]);

            if (!$tokenResponse->successful()) {
                return response()->json(['error' => 'Failed to get access token'], 500);
            }

            $accessToken = $tokenResponse['access_token'];

            // Step 2: Get Discord user info
            $userResponse = Http::withHeaders([
                'Authorization' => 'Bearer ' . $accessToken,
            ])->get('https://discord.com/api/users/@me');

            if (!$userResponse->successful()) {
                return response()->json(['error' => 'Failed to fetch user info'], 500);
            }

            $discordUser = $userResponse->json();

            $discordUser['avatar'] = "https://cdn.discordapp.com/avatars/{$discordUser['id']}/{$discordUser['avatar']}.png";

            $user = User::updateOrCreate(
                    ['discord_id' => $discordUser['id']], // الشرط
                    ['name' => $discordUser['username'],
                    'email' => $discordUser['email'] ?? null,
                    'password' => Hash::make(Str::random(16)), // توليد كلمة مرور عشوائية
                    'avatar' => $discordUser['avatar'],
                    'role' => 'user', // تعيين دور المستخدم
                ]
            );


            if (!$user) {
                return response()->json(['error' => 'Failed to create or update user'], 500);
            }

             $token = $user->createToken('api_token')->plainTextToken;

            return response()->json([
                'token' => $token,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function discordCheck(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'user'  => $user,
        ]);
    }
}
