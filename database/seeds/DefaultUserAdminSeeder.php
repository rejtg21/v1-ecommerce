<?php

use Illuminate\Database\Seeder;
use App\Models\UserAdmin;

class DefaultUserAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaultUserAdmin = config('default.user_admin');
        // since we are using soft delete we need to force it.
        UserAdmin::where('id', $defaultUserAdmin['id'])->forceDelete();

        $defaultUserAdmin['password'] = bcrypt($defaultUserAdmin['password']);
        // iso date string so that in javascript we could identify the timezone.
        $defaultUserAdmin['created_at'] = date('c', strtotime('now'));

        UserAdmin::insert($defaultUserAdmin);
    }
}
