<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Product;
use App\Models\ProductType;
use App\Models\Currency;

class ProductController extends Controller
{
    public function get(Request $request)
    {
        $lists = Product::get();
        // $pages = 
        return compact('lists');//, 'pages');
    }

    public function show($id) 
    {
        return Product::find($id);
    }

    public function store(Request $request)
    {
        logger('saving - - -');
        logger($request->all());
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

        return compact('product', 'message');
    }

    public function getCurrencies()
    {
        return Currency::get(['id', 'symbol']);
    }
    
    public function getTypes()
    {
        return ProductType::get(['id', 'name']);
    }

    private function _getCreator()
    {
        // if there is auth change the implementation
        return config('default.user_admin.id');
    }
}
