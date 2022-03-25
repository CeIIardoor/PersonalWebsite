<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

class VehiculeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'matricule' => $this->faker->numerify('#####/').$this->faker->randomElement(['A','B','C']).$this->faker->numerify('/##'),
            'type' => $this->faker->randomElement(['Motocycle','Voiture','Camion','Remorque']),
            'marque' => $this->faker->randomElement(['Volvo','Mercedes','Ford','Isuzu']),
            'libre' => rand(0,1),
            'type_contrat' => $this->faker->randomElement(['Achat','Location']),
            'type_essence' => $this->faker->randomElement(['Diesel','Gasoil']),
            'date_acquisition' => Carbon::today(),
            'date_retour' => null,
            'capacite' => rand(100,10000),
            'kilometrage' => rand(100,50000),
            'consommation' => rand(7,15)
        ];
    }
}
