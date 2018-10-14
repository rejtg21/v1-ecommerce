<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $seedForDevelopment = [
            // DefaultUserAdminSeeder::class,
            DefaultCustomerSeeder::class,
            FakeProductTypeSeeder::class,
            FakeProductSeeder::class
        ];

        // add condition here if for production
        $toBeSeeded = $seedForDevelopment;
        
        $this->call($toBeSeeded);
    }
}
