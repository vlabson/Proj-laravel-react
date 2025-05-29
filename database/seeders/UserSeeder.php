<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'admin@digitalviana.com.br'],
            ['name' => 'admin', 'email' => 'admin@digitalviana.com.br', 'password' => '123456@D']
        );
        User::firstOrCreate(
            ['email' => 'vlabson@digitalviana.com.br'],
            ['name' => 'vlabson', 'email' => 'vlabson@digitalviana.com.br', 'password' => '123456@D']
        );
    }
}
