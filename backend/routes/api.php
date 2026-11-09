<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContentController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::get('/contents/latest', [ContentController::class, 'latest']);
Route::get('/contents/watched', [ContentController::class, 'watched']);

Route::get('/contents/latest/films', [ContentController::class, 'latestFilms']);
Route::get('/contents/watched/films', [ContentController::class, 'watchedFilms']);
Route::get('/contents/latest/series', [ContentController::class, 'latestSeries']);
Route::get('/contents/watched/series', [ContentController::class, 'watchedSeries']);

route::get('contents/{id}', [ContentController::class, 'show']);