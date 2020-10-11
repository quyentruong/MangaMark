<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTVShowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('t_v_shows', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('other_name_1')->nullable();
            $table->string('other_name_2')->nullable();
            $table->string('other_name_3')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->integer('season');
            $table->float('quantity');
            $table->timestamps();
            $table->unique(['user_id', 'name'], 't_v_show_unique');
            $table->foreign('user_id', 't_v_show_foreign')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('t_v_shows');
    }
}
