<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactDocumentationController extends Controller
{
     public function app($value='')
    {
        return view('documentation',['meta' => "welcome's you Mr valintine..."]);
    }
}
