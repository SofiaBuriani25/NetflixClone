<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $categories = ['Azione', 'Commedia', 'Horror', 'Drammatico', 'Thriller', 'Fantascienza', 'Animazione', 'Documentario'];

        $contents = [];

        // 30 film
        for ($i = 1; $i <= 30; $i++) {
            $contents[] = [
                'type'            => 'film',
                'category'        => $categories[array_rand($categories)],
                'title'           => "Film $i",
                'description'     => "Descrizione del film $i. Una storia avvincente che ti terrà incollato allo schermo.",
                'poster_url'      => "https://picsum.photos/seed/film$i/300/450",
                'published_at'    => Carbon::now()->subDays(rand(1, 365)),
                'last_watched_at' => rand(0, 1) ? Carbon::now()->subDays(rand(1, 30)) : null,
                'duration'        => rand(80, 180),
                'seasons'         => null,
                'episodes'        => null,
                'created_at'      => Carbon::now(),
                'updated_at'      => Carbon::now(),
            ];
        }

        // 30 serie tv
        for ($i = 1; $i <= 30; $i++) {
            $seasons  = rand(1, 5);
            $contents[] = [
                'type'            => 'series',
                'category'        => $categories[array_rand($categories)],
                'title'           => "Serie $i",
                'description'     => "Descrizione della serie $i. Una serie che non puoi smettere di guardare.",
                'poster_url'      => "https://picsum.photos/seed/series$i/300/450",
                'published_at'    => Carbon::now()->subDays(rand(1, 365)),
                'last_watched_at' => rand(0, 1) ? Carbon::now()->subDays(rand(1, 30)) : null,
                'duration'        => null,
                'seasons'         => $seasons,
                'episodes'        => $seasons * rand(8, 12),
                'created_at'      => Carbon::now(),
                'updated_at'      => Carbon::now(),
            ];
        }

        DB::table('contents')->insert($contents);
    }
}