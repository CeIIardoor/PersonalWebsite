<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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
        //Users Seeder
        ////////////////////////////////////
        
        \App\Models\User::factory(10)->create();

        DB::table('users')->insert([
            'name' => 'Yassine Laouina',
            'email' => 'yassine@emsi.ma',
            'email_verified_at' => now(),
            'password' => '$2y$10$ob1S3Hv5hrY/r1kyXD766OniCi6rhDx7hmj16WQC4LFo6W/3q4PJ2', // azerty
            'remember_token' => Str::random(10),
            'role_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'Souhail Dahani',
            'email' => 'souhail@emsi.ma',
            'email_verified_at' => now(),
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
            'title' => 'Collaborateur',
        ]); 
        DB::table('roles')->insert([
            'id' => 3,
            'title' => 'Chauffeur',
        ]); 
    }
}
