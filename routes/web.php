<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImagesController;
 
Route::get('/', function () {
    return view('welcome');
});

Route::get('/documentation',function(){
    return view('documentation');
});


Route::controller(ImagesController::class)->group(function () {
    Route::get('/', 'welcome');
    Route::post('/documentation', 'documentation');
});