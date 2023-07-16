<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactDocumentationController extends Controller
{
     public function app($value='')
    {
         return view('documentation',['tittle'=>'🧑🏼‍🔬 Scientific Universe 🍷', 'meta' => "welcome's you  Mr amar komre..."]);
    }
}
