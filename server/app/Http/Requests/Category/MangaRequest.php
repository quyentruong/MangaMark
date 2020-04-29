<?php

namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;

class MangaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if (strcmp($this->get('action'), 'name') === 0){
            return [
                'user_id' => 'required|numeric',
                'name' => 'required|unique:mangas,name,NULL,id,user_id,'.$this->user_id
            ];
        }
        if (strcmp($this->get('action'), 'other_name') === 0){
            return [
                'user_id' => 'required|numeric',
                'other_name' => 'nullable|unique:mangas,other_name,NULL,id,user_id,'.$this->user_id
            ];
        }
        if (strcmp($this->get('action'), 'number') === 0){
            return [
                'user_id' => 'required|numeric',
                'quantity' => 'required|numeric|min:1'
            ];
        }
        return [
            'name' => 'required|unique:mangas,name,NULL,id,user_id,'.$this->user_id,
            'quantity' => 'required|numeric|min:1'
        ];
    }
}
