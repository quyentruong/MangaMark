<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'is_admin' => $this->isAdmin(),
            'api_key' => $this->api_key,
            'email' => $this->email,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'mangas_count' => count($this->mangas),
            'animes_count' => count($this->animes),
            'tvshows_count' => count($this->tvshows)
        ];
        // return parent::toArray($request);
    }
}
