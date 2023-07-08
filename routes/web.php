<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImagesController;


Route::controller(ImagesController::class)->group(function () {
    Route::get('/', 'welcome');
    Route::get('/documentation', 'documentation');
});