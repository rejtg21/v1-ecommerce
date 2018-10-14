<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Product;

class ProductController extends Controller
{
    public function get(Request $request)
    {
        $lists = Product::get();
        logger('lists ');
        // $pages = 
        return compact('lists');//, 'pages');
    }

    public function show($id) 
    {
        return Product::find($id);
    }

    public function store(Request $request)
    {
        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->currency_id = $request->currency_id;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->product_type_id = $request->product_type_id;
        $product->created_at = date('c', strtotime('now'));
        $product->created_by = $this->_getCreator();
        $product->save();

        $message = trans('app/admin.success.save');
    }

    private function _getCreator()
    {
        // if there is auth change the implementation
        return config('default.user_admin.id');
    }
}
