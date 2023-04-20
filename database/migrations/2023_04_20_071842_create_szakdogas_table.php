<?php

use App\Models\Szakdoga;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('szakdogas', function (Blueprint $table) {
            $table->id();
            $table->string("szakdoga_nev");
            $table->string("githublink");
            $table->string("oldallink");
            $table->string("tagokneve");
            $table->timestamps();
        });

        Szakdoga::create(["szakdoga_nev"=>"TesztSzakdoga1", "githublink"=>"TesztGhLink1", "oldallink"=>"OldalLink1", "tagokneve"=>"Valaki, Okos, Éva"]);
        Szakdoga::create(["szakdoga_nev"=>"TesztSzakdoga2", "githublink"=>"TesztGhLink2", "oldallink"=>"OldalLink2", "tagokneve"=>"Walaki, Ügyes, Béla"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('szakdogas');
    }
};
