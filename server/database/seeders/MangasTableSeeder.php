<?php

namespace Database\Seeders;

use App\Models\Manga;
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
        Manga::factory(300)->create();
    }
}
