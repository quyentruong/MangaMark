<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class MangaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $users = User::all()->pluck('id')->toArray();
        return [
            'name' => $this->faker->words($this->faker->numberBetween(3, 9), true),
            //        'name' => $faker->regexify('[A-Za-z0-9]{20}'),
            'user_id' => $this->faker->randomElement($users),
            'quantity' => $this->faker->numberBetween(1, 100)
        ];
    }
}
