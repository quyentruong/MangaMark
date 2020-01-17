<?php

namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TVShowRequest extends FormRequest
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
                'name' => 'required|unique:t_v_shows,name,NULL,id,user_id,'.$this->user_id
            ];
        }
        if (strcmp($this->get('action'), 'number') === 0){
            return [
                'user_id' => 'required|numeric',
                'season' => 'required_without:quantity|numeric|min:1',
                'quantity' => 'required_without:season|numeric|min:1'
            ];
        }
        return [
            'name' => 'required|unique:t_v_shows,name,NULL,id,user_id,'.$this->user_id,
            'season' => 'required|numeric|min:1',
            'quantity' => 'required|numeric|min:1'
        ];
    }
}
