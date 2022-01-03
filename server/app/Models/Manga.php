<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manga extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'other_name_1', 'other_name_2', 'other_name_3', 'quantity', 'created_at', 'updated_at'
    ];

    public function user()
    {
        $this->belongsTo(User::class);
    }
}
