<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\ApplicationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/clear', function() {
    Artisan::call('cache:clear');
    Artisan::call('view:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    Artisan::call('route:clear');
    Artisan::call('clear-compiled');
    return "Cleared!";
 });
 
Route::get('/login', [ApplicationController::class, 'index'])->name('login');

Route::middleware('token')->group(function () {
    Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');
});

Route::get('/test', function(){
    $user = ['name' => 'Allen Turing', 'info'=> 'Verification email'];
    \Mail::to('developer.techleadz@gmail.com')->send(new \App\Mail\NewMail($user));

    dd("success");

});
