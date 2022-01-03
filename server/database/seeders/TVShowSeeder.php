<?php

namespace Database\Seeders;

use App\Models\TVShow;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TVShowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('t_v_shows')->truncate();
        TVShow::factory(100)->create();
    }
}
