<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\JsonResponse;

class ContentController extends Controller
{
    // Ultimi 20 contenuti pubblicati (film + serie misti)
    public function latest(): JsonResponse // Metodo chiamato quando React chiede /api/contents/latest
    {
        $contents = Content::orderBy('published_at', 'desc') // in ordine decrescente
            ->take(20)
            ->get();

        return response()->json($contents); // trasforma i dati in JSON 
    }

    // Ultimi 20 contenuti visti (film + serie tv)
    public function watched(): JsonResponse // Metodo chiamato quando React chiede /api/contents/watched
    {
        $contents = Content::whereNotNull('last_watched_at') // solo quelli che hanno last_watched_at
            ->orderBy('last_watched_at', 'desc')
            ->take(20)
            ->get();

        return response()->json($contents);
    }

    // ultimi 10 film pubblicati
    public function latestFilms(): JsonResponse 
    {
        $contents = Content::where('type', 'film')
        ->orderBy('published_at', 'desc')
        ->take(10)
        ->get();

        return response()->json($contents);
    }

    // ultime 10 serie tv pubblicate
    public function latestSeries(): JsonResponse 
    {
        $contents = Content::where('type', 'series')
        ->orderBy('published_at', 'desc')
        ->take(10)
        ->get();

        return response()->json($contents);
    }

    // ultimi 10 film visti
    public function watchedFilms(): JsonResponse
    {
        $contents = Content::where('type', 'film')
        ->whereNotNull('last_watched_at')
        ->orderBy('last_watched_at', 'desc')
        ->take(10)
        ->get();

        return response()->json($contents);
    }

    //ultime 10 serie tv viste
    public function watchedSeries(): JsonResponse
    {
        $contents = Content::where('type', 'series')
        ->whereNotnull('last_watched_at')
        ->orderBy('last_watched_at', 'desc')
        ->take(10)
        ->get();

        return response() ->json($contents);
    }

    // Dettaglio del singolo contenuto
    public function show(int $id): JsonResponse
    {
        $content = Content::findOrFail($id);
        // findOrFail restituisce il contenuto se esiste
        // altrimenti risponde automaticamente con 404
        return response() -> json($content);
    }


}