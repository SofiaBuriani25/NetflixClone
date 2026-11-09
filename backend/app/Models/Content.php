<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = [
        'type',
        'category',
        'title',
        'description',
        'poster_url',
        'published_at',
        'last_watched_at',
        'duration',
        'seasons',
        'episodes'
    ];

    // casts serve per fare in modo che quei due campi (timestamp) vengano trattati come date
    protected $casts = [
        'published_at'    => 'datetime',
        'last_watched_at' => 'datetime',
    ];
}