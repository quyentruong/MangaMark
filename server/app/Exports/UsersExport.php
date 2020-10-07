<?php

namespace App\Exports;

use App\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;


class UsersExport implements FromCollection, WithHeadings, WithMapping
{
    protected $id;

    public function __construct($id)
    {
        $this->id = $id;
    }

    public function headings(): array
    {
        return [
            'name',
            'other_name',
            'quantity',
            'created_at',
            'updated_at'
        ];
    }

    public function map($row): array
    {
        return [
            $row->name,
            $row->other_name,
            $row->quantity,
            $row->created_at,
            $row->updated_at
        ];
    }

    public function collection()
    {
        $mangas = User::find($this->id)->mangas()->get();
        return $mangas;
    }
}
