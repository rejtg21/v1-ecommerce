<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\GeneralResourceService;
class AdminController extends Controller
{
    public function index() 
    {
        return view('admin');
    }
    // translation for javascript in admin
    // we will only expose needed translation for javascript
    public function translation() 
    {
        $generalTranslation = GeneralResourceService::translation();

        $data = json_encode([
            'general' => $generalTranslation,
            'admin' => trans('app/admin')
        ]);

        $translations = "window.translations = {$data} ;";

        return response($translations)->withHeaders([
            'Content-type', 'text/javascript'
        ]);
    }

}
