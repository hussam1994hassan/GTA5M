<?php

use App\Http\Controllers\DiscordUsersController;
use Illuminate\Support\Facades\Route;

Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '(.*)');