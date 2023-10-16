<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;

class AuthorController extends Controller
{

    public function index()
    {
        $authors = Author::with('books')->get();
        return response()->json($authors);
    }
}
