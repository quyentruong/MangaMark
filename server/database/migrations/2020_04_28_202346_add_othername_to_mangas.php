<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOthernameToMangas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mangas', function (Blueprint $table) {
            $table->string('other_name')->after('name')->nullable();
            $table->dropForeign('mangas_user_id_foreign');
            $table->dropUnique('mangas_user_id_name_unique');

            $table->unique(['user_id', 'name', 'other_name']);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mangas', function (Blueprint $table) {
            $table->dropForeign('mangas_user_id_foreign');
            $table->dropUnique('mangas_user_id_name_other_name_unique');
            $table->dropColumn('other_name');
            $table->unique(['user_id', 'name']);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }
}
