<?php

namespace App\Http\Controllers\Category;

use App\Exports\TVShowsExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\TVShowRequest;
use App\Imports\TVShowsImport;
use App\TVShow;
use App\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Maatwebsite\Excel\Facades\Excel;

class TVShowController extends Controller
{
    public function delete_all($user_id)
    {
        User::find($user_id)->tvshows()->delete();
        return response()->json(null, 204);
    }

    public function import(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'xlsx' => 'required|mimes:xlsx'
        ]);
        Excel::import(new TVShowsImport($request->id), $request->xlsx);
        return response()->json(null, 201);
    }

    public function export($user_id)
    {
        return Excel::raw(new TVShowsExport($user_id), \Maatwebsite\Excel\Excel::XLSX);
    }
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $tvshows = User::find($request->user()->id)->tvshows()->get();
        return response()->json([
            'data' => $tvshows
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
     * @param TVShowRequest $request
     * @return JsonResponse
     */
    public function store(TVShowRequest $request)
    {
        $tvshow = new TVShow($request->all());
        $user = User::find($request->get('user_id'));
        $user->tvshows()->save($tvshow);
        return response()->json($tvshow, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param TVShow $tvshow
     * @return Response
     */
    public function show(TVShow $tvshow)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param TVShow $tvshow
     * @return void
     */
    public function edit(TVShow $tvshow)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TVShowRequest $request
     * @param TVShow $tvshow
     * @return JsonResponse
     */
    public function update(TVShowRequest $request, TVShow $tvshow)
    {
        $tvshow->update($request->all());
        return response()->json($tvshow);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param TVShow $tvshow
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(TVShow $tvshow)
    {
        $tvshow->delete();
        return response()->json(null,204);
    }
}
