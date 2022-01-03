<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        // DB::table('users')->insert([
        //     'name' => Str::random(10),
        //     'email' => 'admin' . '@admin.com',
        //     'email_verified_at' => now(),
        //     'password' => bcrypt('password'),
        //     'created_at' => now(),
        //     'updated_at' => now()
        // ]);
        // DB::table('users')->insert([
        //     'name' => Str::random(10),
        //     'email' => 'user' . '@user.com',
        //     'email_verified_at' => now(),
        //     'password' => bcrypt('password'),
        //     'created_at' => now(),
        //     'updated_at' => now()
        // ]);
        User::factory(10)->create();
    }
}
