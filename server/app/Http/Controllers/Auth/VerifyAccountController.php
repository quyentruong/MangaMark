<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Models\User;

class VerifyAccountController extends Controller
{
    /**
     * Login
     *
     * @param LoginRequest $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function verify(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'token' => 'required',
        ]);

        try {

            $token = JWTAuth::getToken();

            $apy = JWTAuth::getPayload($token)->toArray();

            $user = User::where('email', $request->email)->first();

            // Return error message if user not found.
            if (!$user) return response()->json(['error' => 'User not found.'], 401);

            $auth = auth()->setToken($request->token)->user();

            // Return error message if user and token mismatch.
            if ($auth->email !== $user->email) return response()->json(['error' => 'Email and Token did not matched.'], 401);

            $user->update(['email_verified_at' => \Carbon\Carbon::now()]);

            return response()->json(['message' => 'Account has been verified.'], 201);
        } catch (TokenExpiredException $e) {

            return response()->json(['error' => 'Session Expired.', 'status_code' => 401], 401);
        } catch (TokenInvalidException $e) {

            return response()->json(['error' => 'Token invalid.', 'status_code' => 401], 401);
        } catch (JWTException $e) {

            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
}
