<?php

namespace App\Http\Controllers\Profile;

use App\Http\Requests\Profile\UpdatePasswordRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Profile\UpdateProfileRequest;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
     /**
     * Get Login User
     *
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me(Request $request)
    {

        $user = Auth::user();
//        $role = config('roles.models.role')::where('name', '=', 'Admin')->first();
//        $user->attachRole($role);
//        $user->detachRole($role);

//        $users = config('roles.models.defaultUser')::find(1);

        $data = new UserResource($user);

        return response()->json(compact('data'));
//        return response()->json($data);

    }


     /**
     * Update Profile
     *
     *
     * @param UpdateProfileRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateProfileRequest $request)
    {

        $user = Auth::user();

        $user->update($request->only('name', 'email'));

        $data = new UserResource($user);

        return response()->json(compact('data'));

    }

     /**
     * Update Profile
     *
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePassword(UpdatePasswordRequest $request)
    {
        $user = $request->user();
        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['error' => [ 'current_password' => 'Invalid current password']], 422);
        }
        $user->update([
            'password' =>  Hash::make($request->new_password),
        ]);
        $data = new UserResource($user);
        return response()->json(compact('data'));
    }
}
