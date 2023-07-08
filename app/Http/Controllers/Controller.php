<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;


    public function imgToSvg($path2image='')
    {
        $file = __DIR__ . $path2image;
        $path = pathinfo($file);
        $ext = mb_strtolower($path['extension']);

        if (in_array($ext, array('jpeg', 'jpg', 'gif', 'png', 'webp'))) {
        $size = getimagesize($file);
        $img = 'data:' . $size['mime'] . ';base64,' . base64_encode(file_get_contents($file));
        }
    }
}
