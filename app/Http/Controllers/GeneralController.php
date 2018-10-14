<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GeneralController extends Controller
{
    // general translation for javascript
    // we will only expose needed translation for javascript
    public function translation() 
    {
        $data = [
            
        ];

        return response($data)->withHeaders([
            'Content-type', 'text/javascript'
        ]);
    }

    //general config
    public function config() 
    {

    }
}
