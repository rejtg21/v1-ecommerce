<?php

use Faker\Generator as Faker;
use App\Models\Product;

$factory->define(Product::class, function (Faker $faker, $data) {
    return [
        'name' => $faker->name,
        'description' => $faker->text(50),
        'image' => null,
        'currency_id' => config('default.currency.id'),
        'price' => $faker->randomNumber(4),
        'discount' => $faker->randomNumber(2),
        'product_type_id' => $data['product_type_id'],
        'created_at' => date('c', strtotime('now')),
        'created_by' => config('default.user_admin.id')
    ];
});
