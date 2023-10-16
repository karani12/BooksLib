<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Tag;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function index(Request $request){

        // get books, author and tag
        $books = Book::with('author', 'tags')->get();
        return response()->json($books);
       
    }
    // 
    // store
    
    public function store(Request $request)
    {
        $book = Book::create([
            'title' => $request->title,
            'author_id' => $request->author_id,
            'publication_year' => $request->publication_year,
        ]);
        $book->tags()->attach($request->tag_id);
        return response()->json($book);

    }

    // get all tags and associated books based on tag_id

    public function getTags()
    {
        $tags = Tag::with('books')->get();
        return response()->json($tags);

    }


}
