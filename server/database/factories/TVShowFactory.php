<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TVShow;
use App\User;
use Faker\Generator as Faker;

$factory->define(TVShow::class, function (Faker $faker) {
    $users = User::all()->pluck('id')->toArray();
    return [
        'name' => $faker->words($faker->numberBetween(3, 9), true),
        'user_id' => $faker->randomElement($users),
        'season' => $faker->numberBetween(1, 5),
        'quantity' => $faker->numberBetween(1, 25)
    ];
});
