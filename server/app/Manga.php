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
        'name', 'other_name', 'quantity', 'created_at', 'updated_at'
    ];

    public function user()
    {
        $this->belongsTo(User::class);
    }
}
