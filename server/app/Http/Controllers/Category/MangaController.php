<?php

namespace App\Http\Controllers\Category;

use App\Exports\MangasExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\MangaRequest;
use App\Imports\MangasImport;
use App\Manga;
use App\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class MangaController extends Controller
{
    public function delete_all($user_id)
    {
        User::find($user_id)->mangas()->delete();
        return response()->json(null, 204);
    }

    public function import(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'xlsx' => 'required|mimes:xlsx'
        ]);
        Excel::import(new MangasImport($request->id), $request->xlsx);
        return response()->json(null, 201);
    }

    public function export($user_id)
    {
        return Excel::raw(new MangasExport($user_id), \Maatwebsite\Excel\Excel::XLSX);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $mangas = User::find($request->user()->id)->mangas()->get();
//        $result = array();
//        foreach ($mangas as $manga) {
//            $result[] = [
//                'id' => $manga->id,
//                'user_id' => $manga->user_id,
//                'name' => $manga->name,
//                'quantity' => $manga->quantity,
//                'created_at' => $manga->created_at,
//                'updated_at' => $manga->updated_at
//            ];
//        }
        return response()->json([
            'data' => $mangas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param MangaRequest $request
     * @return JsonResponse
     */
    public function store(MangaRequest $request)
    {
        $manga = new Manga($request->all());
        $user = User::find($request->get('user_id'));
        $user->mangas()->save($manga);
        return response()->json($manga);
    }

    /**
     * Display the specified resource.
     *
     * @param Manga $manga
     * @return Response
     */
    public function show(Manga $manga)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Manga $manga
     * @return Response
     */
    public function edit(Manga $manga)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param MangaRequest $request
     * @param Manga $manga
     * @return JsonResponse
     */
    public function update(MangaRequest $request, Manga $manga)
    {
        $manga->update($request->all());
        return response()->json($manga);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Manga $manga
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Manga $manga)
    {
        $manga->delete();
        return response()->json(null, 204);
    }
}
