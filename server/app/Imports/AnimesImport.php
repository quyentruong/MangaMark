<?php

namespace App\Imports;

use App\User;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class AnimesImport implements ToCollection, WithHeadingRow
{
    protected $id;

    public function __construct($id)
    {
        $this->id = $id;
    }

    public function collection(Collection $rows)
    {
        $user = User::find($this->id);
        foreach ($rows as $row) {
            if ($user->animes()->where('name', $row['name'])->first() === null) {
                $user->animes()->create([
                    'name' => $row['name'],
                    'season' => $row['season'],
                    'quantity' => $row['quantity'],
                    'created_at' => $row['created_at'],
                    'updated_at' => $row['updated_at'],
                ]);
            }
        }
    }
}
