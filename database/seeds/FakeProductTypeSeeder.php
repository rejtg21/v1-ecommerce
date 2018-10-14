<?php

use Illuminate\Database\Seeder;
use App\Models\ProductType;

class FakeProductTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->_reset();

        factory(ProductType::class, 5)->create();
    }

    private function _reset() 
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
        ProductType::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }
}
