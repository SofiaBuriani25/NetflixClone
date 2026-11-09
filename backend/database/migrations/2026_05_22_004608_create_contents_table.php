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
    Schema::create('contents', function (Blueprint $table) {
        $table->id();
        $table->enum('type', ['film', 'series']);
        $table->string('category');
        $table->string('title');
        $table->text('description');
        $table->string('poster_url');
        $table->timestamp('published_at');
        $table->timestamp('last_watched_at')->nullable();
        $table->integer('duration')->nullable();    // solo film, in minuti
        $table->integer('seasons')->nullable();     // solo series
        $table->integer('episodes')->nullable();    // solo series
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contents');
    }
};
