<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Services\GeneralResourceService;

class HomeController extends Controller
{
    public function index() 
    {
        return view('home');
    }
    // translation for javascript in home
    // we will only expose needed translation for javascript
    public function translation() 
    {
        $generalTranslation = GeneralResourceService::translation();

        $data = [
            'general' => $generalTranslation,
            'home' => trans('app/home')
        ];

        $translations = 'window.translations = ' + json_encode($data) + ';';

        return response($translations)->withHeaders([
            'Content-type', 'text/javascript'
        ]);
    }

    public function config() 
    {

    }
}
