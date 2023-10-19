<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $authors = [
            "David Baldacci",
            "John Grisham"
        ];

        foreach ($authors as $author) {
            DB::table('authors')->insert([
                'name' => $author,
            ]);
        }
    }
}
