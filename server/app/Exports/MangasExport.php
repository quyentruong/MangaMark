<?php

namespace App\Exports;

use App\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithProperties;

class MangasExport implements FromCollection, WithHeadings, WithMapping, WithProperties, ShouldAutoSize
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
            'other_name_1',
            'other_name_2',
            'other_name_3',
            'quantity',
            'created_at',
            'updated_at'
        ];
    }

    public function map($row): array
    {
        return [
            $row->name,
            $row->other_name_1,
            $row->other_name_2,
            $row->other_name_3,
            $row->quantity,
            $row->created_at,
            $row->updated_at
        ];
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return User::find($this->id)->mangas()->get();
    }

    public function properties(): array
    {
        return [
            'lastModifiedBy' => User::find($this->id)->email,
            'title'          => 'Manga data export',
            'description'    => "Latest Manga data on " . date('l m/d/Y h:i:sa'),
            'subject'        => 'Manga',
            'keywords'       => 'manga,export,spreadsheet',
            'category'       => 'Manga'
        ];
    }
}
