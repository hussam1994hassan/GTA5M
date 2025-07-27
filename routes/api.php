<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

// Api Guest Routes
Route::controller(ApiController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/create', 'create');
});

// Api Auth Routes
Route::controller(ApiController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/user', 'user');
    Route::post('/logout', 'logout');
});
