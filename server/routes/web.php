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

use App\Exports\MangasExport;
use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;

Route::get('/', 'FrontEndController@index')->name('frontend.index');
Route::get('/profile', 'FrontEndController@profile')->name('frontend.profile');
Route::get('/faq', 'FrontEndController@faq')->name('frontend.faq');
Route::get('/guest/login', 'FrontEndController@login')->name('frontend.login');
Route::get('/guest/register', 'FrontEndController@register')->name('frontend.register');
Route::get('/guest/forgot-password', 'FrontEndController@forgot_password')->name('frontend.forgot_password');
Route::get('/guest/reset-password', 'FrontEndController@reset_password')->name('frontend.reset_password');
Route::get('/guest/verify', 'FrontEndController@verify')->name('frontend.verify');
//Route::get('/download/', function (){
//    return Excel::download(new MangasExport(1), 'manga.xlsx');
//});

// SPA
//Route::get(
//    '{uri}',
//    '\\'.Pallares\LaravelNuxt\Controllers\NuxtController::class
//)->name('nuxt')->where('uri', '.*');
