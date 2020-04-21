<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(UrlGenerator $url)
    {
        if (config('dbsetting.db_boot_limit')) {
            Schema::defaultStringLength(191);
        }
        if(env('APP_ENV') !== 'local')
        {
            $url->forceSchema('https');
        }
    }
}
