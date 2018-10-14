<?php

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

//home
Route::get('/', function() {
    return redirect('/home');
});
Route::namespace('Home')->prefix('home')->group(function() {
    Route::get('/', 'HomeController@index');
    // we make it look like translation came from a javascript file
    Route::get('/translations.js', 'HomeController@translation');
    Route::get('/config.js', 'HomeController@config');
});

//admin
Route::namespace('Admin')->prefix('admin')->group(function() {
    Route::get('/', 'AdminController@index');
    // we make it look like translation came from a javascript file
    Route::get('/translations.js', 'AdminController@translation');
    Route::get('/config.js', 'AdminController@config');
});
