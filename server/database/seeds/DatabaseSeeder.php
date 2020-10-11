<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        $this->call(UsersTableSeeder::class);
        $this->call(AnimesTableSeeder::class);
        $this->call(MangasTableSeeder::class);
        $this->call(TVShowSeeder::class);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
