<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Route::get('/', function () {
//    return [
//        'app' => 'Laravel 6 API Boilerplate',
//        'version' => '1.0.0',
//    ];
//});
//Route::get('/users/export/', 'FrontEndController@export');
Route::group(['namespace' => 'Auth'], function () {

    Route::post('auth/login', ['as' => 'login', 'uses' => 'AuthController@login']);

    Route::post('auth/register', ['as' => 'register', 'uses' => 'RegisterController@register']);
    // Send reset password mail
    Route::post('auth/recovery', ['as' => 'recovery', 'uses' => 'ForgotPasswordController@sendPasswordResetLink']);
    // handle reset password form process
    Route::post('auth/reset', ['as' => 'reset', 'uses' => 'ResetPasswordController@callResetPassword']);
    // handle reset password form process
    Route::post('auth/verify', ['as' => 'verify', 'uses' => 'VerifyAccountController@verify']);

});

Route::group(['middleware' => ['jwt', 'jwt.auth']], function () {

    Route::group(['namespace' => 'Category'], function () {
        Route::resource('category/manga', 'MangaController', [
            'only' => ['index', 'store', 'update', 'destroy']
        ]);
        Route::resource('category/anime', 'AnimeController', [
            'only' => ['index', 'store', 'update', 'destroy']
        ]);
        Route::resource('category/tvshow', 'TVShowController', [
            'only' => ['index', 'store', 'update', 'destroy']
        ]);
//        Route::get('chart/line/month/{number}/manga/{user_id}', ['as' => 'manga.month', 'uses' => 'MangaController@month']);
//        Route::get('chart/line/year/{number}/manga/{user_id}', ['as' => 'manga.year', 'uses' => 'MangaController@year']);
//        Route::get('quantity/manga/{user_id}', ['as' => 'manga.quantity', 'uses' => 'MangaController@quantity']);

//        Route::get('quantity/manga/', ['as' => 'manga.quantity', 'uses' => 'MangaController@quantity']);
//        Route::get('quantity/manga/', ['as' => 'manga.quantity', 'uses' => 'MangaController@quantity']);

        Route::get('export/manga/{user_id}', ['as' => 'manga.export', 'uses' => 'MangaController@export']);
        Route::get('export/anime/{user_id}', ['as' => 'anime.export', 'uses' => 'AnimeController@export']);
        Route::get('export/tvshow/{user_id}', ['as' => 'tvshow.export', 'uses' => 'TVShowController@export']);

        Route::post('import/manga', ['as' => 'manga.import', 'uses' => 'MangaController@import']);
        Route::post('import/anime', ['as' => 'anime.import', 'uses' => 'AnimeController@import']);
        Route::post('import/tvshow', ['as' => 'tvshow.import', 'uses' => 'TVShowController@import']);

        Route::delete('delete/manga/{user_id}', ['as' => 'manga.deleteAll', 'uses' => 'MangaController@delete_all']);
        Route::delete('delete/anime/{user_id}', ['as' => 'anime.deleteAll', 'uses' => 'AnimeController@delete_all']);
        Route::delete('delete/tvshow/{user_id}', ['as' => 'tvshow.deleteAll', 'uses' => 'TVShowController@delete_all']);
    });

    Route::group(['namespace' => 'Profile'], function () {

        Route::get('profile', ['as' => 'profile', 'uses' => 'ProfileController@me']);

        Route::put('profile', ['as' => 'profile', 'uses' => 'ProfileController@update']);

        Route::put('profile/password', ['as' => 'profile', 'uses' => 'ProfileController@updatePassword']);

    });

    Route::group(['namespace' => 'Auth'], function () {

        Route::post('logout', ['as' => 'logout', 'uses' => 'LogoutController@logout']);

    });
    Route::put('generateapi', ['as' => 'api.manga.generate', 'uses' => 'ApiKeyController@generateApiKey']);
});
Route::get('getinfomanga', ['as' => 'api.manga.getinfo', 'uses' => 'ApiKeyController@getInfoManga']);
Route::put('updatemanga', ['as' => 'api.manga.update', 'uses' => 'ApiKeyController@updateManga']);
