<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        ////////////////////////////////////
        //Vehicle Seeder
        ////////////////////////////////////

        \App\Models\Vehicule::factory(10)->create();

        foreach(\App\Models\Vehicule::all() as $vehicule){
            if ($vehicule->type_contrat == 'Achat') {
                $vehicule->date_acquisition = Carbon::parse($vehicule->date_acquisition)
                ->subDays(rand(1,30))
                ->subMonths(rand(1,12))
                ->subYears(rand(1,5));
                $vehicule->save();
            }
            if ($vehicule->type_contrat == 'Location') {
                $vehicule->date_retour = Carbon::parse($vehicule->date_acquisition)
                ->addDays(rand(15,90));
                $vehicule->save();
            }

        }

        ////////////////////////////////////
        //Users Seeder
        ////////////////////////////////////
        
        \App\Models\User::factory(10)->create();

        DB::table('users')->insert([
            'name' => 'Yassine Laouina',
            'email' => 'yassine@emsi.ma',
            'address' => '294 Ismailia, Kenitra, Maroc',
            'tel' => '06-62-71-82-25',
            'password' => '$2y$10$ob1S3Hv5hrY/r1kyXD766OniCi6rhDx7hmj16WQC4LFo6W/3q4PJ2', // azerty
            'remember_token' => Str::random(10),
            'role_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'Souhail Dahani',
            'email' => 'souhail@emsi.ma',
            'tel' => '06-61-82-73-91',
            'address' => '123 Rue Antara, Sale, Maroc',
            'password' => '$2y$10$ob1S3Hv5hrY/r1kyXD766OniCi6rhDx7hmj16WQC4LFo6W/3q4PJ2', // azerty
            'remember_token' => Str::random(10),
            'role_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('roles')->insert([
            'id' => 1,
            'title' => 'Administrateur',
        ]); 
        DB::table('roles')->insert([
            'id' => 2,
            'title' => 'Gestionnaire',
        ]); 
        DB::table('roles')->insert([
            'id' => 3,
            'title' => 'Chauffeur',
        ]); 
        DB::table('roles')->insert([
            'id' => 4,
            'title' => 'Collaborateur',
        ]); 
    }
}
