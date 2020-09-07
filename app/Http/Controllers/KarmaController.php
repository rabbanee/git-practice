<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KarmaController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function singleProduct()
    {
        return view('single-product');
    }

    public function checkout()
    {
        return view('checkout');
    }

    public function cart()
    {
        return view('cart');
    }

    public function confirmation()
    {
        return view('confirmation');
    }

    public function blog()
    {
        return view('blog');
    }

    public function singleBlog()
    {
        return view('single-blog');
    }

    public function login()
    {
        return view('login');
    }

    public function tracking()
    {
        return view('tracking');
    }

    public function elements()
    {
        return view('elements');
    }

    public function contact()
    {
        return view('contact');
    }
}
