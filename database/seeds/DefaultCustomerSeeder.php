<?php

use Illuminate\Database\Seeder;
use App\Models\Customer;
class DefaultCustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaultCustomer = config('default.customer');
        // since we are using soft delete we need to force it.
        Customer::where('id', $defaultCustomer['id'])->forceDelete();

        $defaultCustomer['password'] = bcrypt($defaultCustomer['password']);
        // iso date string so that in javascript we could identify the timezone.
        $defaultCustomer['created_at'] = date('c', strtotime('now'));

        Customer::insert($defaultCustomer);
    }
}
