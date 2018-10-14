<?php 
namespace App\Services;
/**
 * A General Resources Service
 * Handle shared resources in the application
 * @author Rej Mediodia
 */

 class GeneralResourceService {

    public static function translation() 
    {
        $data = [
            'propmt' => trans('app/general/prompt')
        ];

        return $data;
    }

    public static function config() 
    {

    }
 }