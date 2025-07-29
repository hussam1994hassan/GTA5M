<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('discord_users', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('discord_id');
            $table->string('username');
            $table->string('email')->nullable();
            $table->string('avatar')->nullable();
            $table->string('secret')->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('discord_users');
    }
};
