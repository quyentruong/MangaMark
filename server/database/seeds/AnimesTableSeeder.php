<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnimesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('animes')->truncate();
        factory(App\Anime::class, 100)->create();
    }
}
