<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TVShow extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'other_name_1', 'other_name_2', 'other_name_3', 'season', 'quantity', 'created_at', 'updated_at'
    ];

    public function user()
    {
        $this->belongsTo(User::class);
    }
}
