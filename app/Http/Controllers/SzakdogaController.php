<?php

namespace App\Http\Controllers;

use App\Models\Szakdoga;
use Illuminate\Http\Request;

class SzakdogaController extends Controller
{
    public function osszSzakdoga()
    {
        return response()->json(Szakdoga::all());
    }

    public function torol($id)
    {
        Szakdoga::find($id)->delete();
    }

    public function ujSzakdoga(Request $req)
    {
        $szakdoga = new Szakdoga();
        $szakdoga->szakdoga_nev=$req->szakdoga_nev;
        $szakdoga->githublink=$req->githublink;
        $szakdoga->oldallink=$req->oldallink;
        $szakdoga->tagokneve = $req->tagokneve;
        $szakdoga->save();
    }

    public function modosSzakdoga($id, Request $req)
    {
        $szakdoga = Szakdoga::find($id);
        $szakdoga->szakdoga_nev=$req->szakdoga_nev;
        $szakdoga->githublink=$req->githublink;
        $szakdoga->oldallink=$req->oldallink;
        $szakdoga->tagokneve = $req->tagokneve;
        $szakdoga->save();
    }
}