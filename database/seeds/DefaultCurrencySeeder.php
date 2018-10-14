<?php

use Illuminate\Database\Seeder;
use App\Models\Currency;
class DefaultCurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaultCurrency = config('default.currency');
        // since we are using soft delete we need to force it.
        Currency::where('id', $defaultCurrency['id'])->forceDelete();

        // iso date string so that in javascript we could identify the timezone.
        $defaultCurrency['created_at'] = date('c', strtotime('now'));

        Currency::insert($defaultCurrency);
    }
}
