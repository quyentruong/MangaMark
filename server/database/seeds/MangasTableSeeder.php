<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MangasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mangas')->truncate();
        factory(App\Manga::class, 100)->create();
    }
}
