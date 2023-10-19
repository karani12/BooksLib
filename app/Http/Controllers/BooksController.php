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
            'title' => $request->input('title'),
            'author_id' => $request->input('author_id'),
            'publication_year' => $request->input('publication_year'),
        ]);
        $book->tags()->attach($request->input('tag_id'));
        $book->load('author', 'tags');
        return response()->json($book, 200);
    }
    


    public function getTags()
    {
        $tags = Tag::with('books')->get();
        return response()->json($tags);

    }


}
