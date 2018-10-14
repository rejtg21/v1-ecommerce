<?php

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductType;

class FakeProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->_reset();
        logger('seeded product');
        $productTypes = ProductType::get();

        $productTypes->each(function($type) {
            // 5 per product types
            factory(Product::class, 5)->create([
                'product_type_id' => $type->id  
            ]);
        });
    }

    private function _reset() 
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
        Product::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }
}
