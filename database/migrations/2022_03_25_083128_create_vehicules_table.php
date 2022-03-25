<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiculesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicules', function (Blueprint $table) {
            $table->id();
            $table->string('matricule');
            $table->string('marque');
            $table->string('type');
            $table->boolean('libre');
            $table->string('type_essence');
            $table->string('type_contrat');
            $table->date('date_acquisition');
            $table->date('date_retour')->nullable();
            $table->integer('capacite')->nullable();
            $table->integer('kilometrage');
            $table->integer('consommation');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicules');
    }
}
