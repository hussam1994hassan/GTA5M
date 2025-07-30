<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

// Api Guest Routes
Route::controller(ApiController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/create', 'create');

    // Discord Auth Route
    Route::get('/discord/callback', 'discordCallback');
    Route::post('/discord/check', 'discordCheck');
});

// Api Auth Routes
Route::controller(ApiController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/user', 'user');
    Route::post('/logout', 'logout');
});