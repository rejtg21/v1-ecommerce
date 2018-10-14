<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $hidden = ['updated_by', 'created_by', 'created_at', 'updated_at'];
    public $timestamps = false;

    public function type() 
    {
        return $this->belongsTo('App\Models\ProductType', 'product_type_id');
    }

    public function currency() 
    {
        return $this->belongsTo('App\Models\Currency', 'currency_id');
    }
}
