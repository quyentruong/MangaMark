<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Anime;
use App\User;
use Faker\Generator as Faker;

$factory->define(Anime::class, function (Faker $faker) {
    $users = User::all()->pluck('id')->toArray();
    return [
        'name' => $faker->words($faker->numberBetween(3, 9), true),
        'user_id' => $faker->randomElement($users),
        'season' => $faker->numberBetween(1, 5),
        'quantity' => $faker->numberBetween(1, 25)
    ];
});
