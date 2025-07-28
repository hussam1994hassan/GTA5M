<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class discordUsers extends Model
{
    protected $table = 'discord_users';

    protected $fillable = [
        'discord_id',
        'username',
        'email',
        'avatar',
        'secret',
    ];

}
