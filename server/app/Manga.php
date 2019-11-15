<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manga extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'quantity'
    ];

    public function user()
    {
        $this->belongsTo(User::class);
    }
}
