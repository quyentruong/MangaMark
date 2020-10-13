<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
        DB::table('users')->insert([
            'name' => Str::random(10),
            'email' => 'admin' . '@admin.com',
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
        ]);
        DB::table('users')->insert([
            'name' => Str::random(10),
            'email' => 'user' . '@user.com',
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
        ]);
//        factory(User::class,5)->create();
    }
}
