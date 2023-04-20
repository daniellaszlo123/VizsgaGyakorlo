<?php

use App\Http\Controllers\SzakdogaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/api/szakdogak', [SzakdogaController::class, 'osszSzakdoga']);
Route::delete('/api/szakdoga/{id}', [SzakdogaController::class, 'torol']);
Route::put('/api/szakdoga/{id}', [SzakdogaController::class, 'modosSzakdoga']);
Route::post('/api/szakdogak/', [SzakdogaController::class, 'ujSzakdoga']);

Route::get('/', function () {
    return view('welcome');
});
