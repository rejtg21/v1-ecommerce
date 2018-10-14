<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $hidden = ['updated_by', 'created_by', 'created_at', 'updated_at'];
}
