<?php

namespace App\Exports;

use App\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithProperties;

class AnimesExport implements FromCollection, WithHeadings, WithMapping, WithProperties, ShouldAutoSize
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
            'season',
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
            $row->season,
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
        return User::find($this->id)->animes()->get();
    }

    public function properties(): array
    {
        return [
            'lastModifiedBy' => User::find($this->id)->email,
            'title'          => 'Anime data export',
            'description'    => "Latest Anime data on " . date('l m/d/Y h:i:sa'),
            'subject'        => 'Anime',
            'keywords'       => 'anime,export,spreadsheet',
            'category'       => 'Anime'
        ];
    }
}
