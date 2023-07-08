<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function createSvgFromImage($path2image='')
    {
        //
    }
    /*public function imgToSvg($path2image='')
    {
        $file = __DIR__ . $path2image;
        $path = pathinfo($file);
        $ext = mb_strtolower($path['extension']);

        if (in_array($ext, array('jpeg', 'jpg', 'gif', 'png', 'webp'))) {
        $size = getimagesize($file);
        $img = 'data:' . $size['mime'] . ';base64,' . base64_encode(file_get_contents($file));
        }
    }
    */
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
