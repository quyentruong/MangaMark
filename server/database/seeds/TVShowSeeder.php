<?php

use Illuminate\Database\Seeder;

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
        factory(App\TVShow::class, 100)->create();
    }
}
