<?php

namespace App\Http\Controllers;

use App\Manga;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ApiKeyController extends Controller
{
    public function getInfoManga(Request $request)
    {
        $request->validate([
            'user_id' => 'required|numeric|min:1',
            'manga_name' => 'required',
            'api' => 'required',
        ]);
        if ($this->checkApi($request->user_id, $request->api) === false)
            return response()->json("Api Key incorrect", 500);
        $manga_name = $request->manga_name;
        $manga = DB::table('mangas')->where('user_id', '=', $request->user_id)->where(function ($query) use ($manga_name) {
            $query->where('name','=', $manga_name)
                ->orWhere('other_name_1','=', $manga_name)
                ->orWhere('other_name_2','=', $manga_name)
                ->orWhere('other_name_3','=', $manga_name);
        })->first();
        if ($manga === null)
            return response()->json("This manga is not found", 404);
        return response()->json([
            'data' => $manga
        ]);
    }

    public function updateManga(Request $request)
    {
        $request->validate([
            'user_id' => 'required|numeric|min:1',
            'chap_number' => 'required|numeric|min:1',
            'manga_name' => 'required',
            'api' => 'required',
        ]);
        if ($this->checkApi($request->user_id, $request->api) === false)
            return response()->json("Api Key incorrect", 500);
        $manga_name = $request->manga_name;
        $manga = DB::table('mangas')->where('user_id', '=', $request->user_id)->where(function ($query) use ($manga_name) {
            $query->where('name','=', $manga_name)
                ->orWhere('other_name_1','=', $manga_name)
                ->orWhere('other_name_2','=', $manga_name)
                ->orWhere('other_name_3','=', $manga_name);
        })->first();
        if ($manga === null)
            return response()->json("This manga is not found", 404);
        $manga->update([
            'quantity' => $request->chap_number
        ]);
        return response()->json([
            'data' => $manga
        ]);
    }

    public function generateApiKey(Request $request)
    {
        $request->validate([
            'id' => 'required|numeric|min:1',
        ]);
        $user = User::find($request->id);
        $user->update([
            'api_key' => Str::random(40)
        ]);
        return response()->json([
            'data' => $user
        ]);
    }

    private function checkApi($user_id, $api)
    {
        $user_api = User::find($user_id)->api_key;
        return ($user_api !== null && $api === $user_api);
    }
}
