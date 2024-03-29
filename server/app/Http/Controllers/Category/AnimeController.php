<?php

namespace App\Http\Controllers\Category;

use App\Models\Anime;
use App\Exports\AnimesExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\AnimeRequest;
use App\Imports\AnimesImport;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Maatwebsite\Excel\Facades\Excel;

class AnimeController extends Controller
{
    public function delete_all($user_id)
    {
        User::find($user_id)->animes()->delete();
        return response()->json(null, 204);
    }

    public function import(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'xlsx' => 'required|mimes:xlsx'
        ]);
        Excel::import(new AnimesImport($request->id), $request->xlsx);
        return response()->json(null, 201);
    }

    public function export($user_id)
    {
        return Excel::raw(new AnimesExport($user_id), \Maatwebsite\Excel\Excel::XLSX);
    }
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $animes = User::find($request->user()->id)->animes()->get();
        return response()->json([
            'data' => $animes
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
     * @param AnimeRequest $request
     * @return JsonResponse
     */
    public function store(AnimeRequest $request)
    {
        $anime = new Anime($request->all());
        $user = User::find($request->get('user_id'));
        $user->animes()->save($anime);
        return response()->json($anime, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param Anime $anime
     * @return Response
     */
    public function show(Anime $anime)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Anime $anime
     * @return Response
     */
    public function edit(Anime $anime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param AnimeRequest $request
     * @param Anime $anime
     * @return JsonResponse
     */
    public function update(AnimeRequest $request, Anime $anime)
    {
        $anime->update($request->all());
        return response()->json($anime);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Anime $anime
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Anime $anime)
    {
        $anime->delete();
        return response()->json(null, 204);
    }
}
