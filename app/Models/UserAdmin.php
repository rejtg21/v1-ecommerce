<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserAdmin extends Model
{
    use SoftDeletes;

    protected $hidden = ['created_at', 'updated_at'];
    // prevent default adding of timestamp by laravel
    protected $timestamps = false;
}
