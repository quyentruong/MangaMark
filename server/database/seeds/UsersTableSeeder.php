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
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => Str::random(10),
            'email' => 'user' . '@user.com',
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
            'created_at' => now(),
            'updated_at' => now()
        ]);
        //        factory(User::class,5)->create();
    }
}
