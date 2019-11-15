<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\MangaRequest;
use App\Manga;
use App\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MangaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $mangas = User::find($request->user()->id)->mangas()->get();
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
     * @return Response
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
     * @return Response
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
     * @return Response
     * @throws Exception
     */
    public function destroy(Manga $manga)
    {
        $manga->delete();
        return response()->json(null,204);
    }
}
