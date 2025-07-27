<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::get('/discord/callback', 'discordCallback');
});

Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '(.*)');
