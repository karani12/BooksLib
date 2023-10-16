<?php

namespace App\Transformers;

use App\Models\Book;
use League\Fractal\TransformerAbstract;

class BooksTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected array $defaultIncludes = [
        //
    ];
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected array $availableIncludes = [
        //
    ];
    
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Book $book)
    {
        return [

            'title' => $book->title,
            'author' => $book->author->name,
            'publication_year' => $book->publication_year,
            'tags' => $book->tags->pluck('name')
        ];
    }
               
    
}
