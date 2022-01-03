<?php

namespace Database\Seeders;

use App\Models\Anime;
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
        Anime::factory(100)->create();
    }
}
