<?php

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

//Route::get('/', function () {
//    return [
//        'app' => 'Laravel 6 API Boilerplate',
//        'version' => '1.0.0',
//    ];
//});

Route::get('/', function () {
    return view('index');
});

Route::get('/profile', function () {
    return view('profile');
});
Route::get('/guest/login', function () {
    return view('guest.login');
});

Route::get('/guest/register', function () {
    return view('guest.register');
});

Route::get('/guest/forgot-password', function () {
    return view('guest.forgot-password');
});

Route::get('/guest/reset-password', function () {
    return view('guest.reset-password');
});

// SPA
//Route::get(
//    '{uri}',
//    '\\'.Pallares\LaravelNuxt\Controllers\NuxtController::class
//)->name('nuxt')->where('uri', '.*');
