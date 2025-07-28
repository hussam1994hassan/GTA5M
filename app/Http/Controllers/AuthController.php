<?php

namespace App\Http\Controllers;

use App\Models\discordUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class AuthController extends Controller
{
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

            // هنا يمكنك حفظ المستخدم في قاعدة البيانات إذا أردت
            // مثلاً:
            // $user = User::updateOrCreate([...]);

            discordUsers::updateOrCreate(
                [
                    'discord_id' => $discordUser['id'],
                    'username' => $discordUser['username'],
                    'email' => $discordUser['email'] ?? null,
                    'avatar' => $discordUser['avatar'],
                    'secret' => Str::random(60), // يمكنك استخدام secret لتوليد رمز فريد للمستخدم
                ]
            );

            return response()->json($discordUser, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}