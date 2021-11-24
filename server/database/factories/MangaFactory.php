<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Manga;
use App\User;
use Faker\Generator as Faker;

$factory->define(Manga::class, function (Faker $faker) {
    $users = User::all()->pluck('id')->toArray();
    return [
        'name' => $faker->words($faker->numberBetween(3, 9), true),
//        'name' => $faker->regexify('[A-Za-z0-9]{20}'),
        'user_id' => $faker->randomElement($users),
        'quantity' => $faker->numberBetween(1, 100)
    ];
});
