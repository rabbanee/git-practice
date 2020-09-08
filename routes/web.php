<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('calculator', 'CalculatorController@index');
Route::get('form', 'FormController@index');
Route::post('proses', 'FormController@proses');

// Route::get('/', 'KarmaController@index')->name('index');

// Route::get('/category', function () {
//     return view('category');
// })->name('category');

// Route::get('/single-product', 'KarmaController@singleProduct')->name('single-product');

// Route::get('/checkout', 'KarmaController@checkout')->name('checkout');

// Route::get('/cart', 'KarmaController@cart')->name('cart');

// Route::get('/confirmation', 'KarmaController@confirmation')->name('confirmation');

// Route::get('/blog', 'KarmaController@blog')->name('blog');

// Route::get('/single-blog', 'KarmaController@singleBlog')->name('single-blog');

// Route::get('/login', 'KarmaController@login')->name('login');

// Route::get('/tracking', 'KarmaController@tracking')->name('tracking');

// Route::get('/elements', 'KarmaController@elements')->name('elements');

// Route::get('/contact', 'KarmaController@contact')->name('contact');
