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


Route::get('/', 'FrontEndController@index')->name('frontend.index');
Route::get('/profile', 'FrontEndController@profile')->name('frontend.profile');
Route::get('/guest/login', 'FrontEndController@login')->name('frontend.login');
Route::get('/guest/register', 'FrontEndController@register')->name('frontend.register');
Route::get('/guest/forgot-password', 'FrontEndController@forgot_password')->name('frontend.forgot_password');
Route::get('/guest/reset-password', 'FrontEndController@reset_password')->name('frontend.reset_password');
Route::get('/guest/verify', 'FrontEndController@verify')->name('frontend.verify');

// SPA
//Route::get(
//    '{uri}',
//    '\\'.Pallares\LaravelNuxt\Controllers\NuxtController::class
//)->name('nuxt')->where('uri', '.*');
