<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        return view('form');
    }

    public function proses(Request $request)
    {
        $name = $request->name;
        $age = $request->age;
        return view('proses', [
            'name' => $name,
            'age' => $age,
        ]);
    }
}
