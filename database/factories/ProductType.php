<?php

use Faker\Generator as Faker;
use App\Models\ProductType;

$factory->define(ProductType::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->text,
        'created_at' => date('c', strtotime('now')),
        'created_by' => config('default.user_admin.id')
    ];
});
