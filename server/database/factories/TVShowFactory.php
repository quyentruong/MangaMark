<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TVShowFactory extends Factory
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
            'user_id' => $this->faker->randomElement($users),
            'season' => $this->faker->numberBetween(1, 5),
            'quantity' => $this->faker->numberBetween(1, 25)
        ];
    }
}
