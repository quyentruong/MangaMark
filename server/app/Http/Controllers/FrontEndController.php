<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontEndController extends Controller
{
    public function login() {
        return view('guest.login');
    }
    public function profile() {
        return view('profile');
    }
    public function forgot_password() {
        return view('guest.forgot-password');
    }
    public function register() {
        return view('guest.register');
    }
    public function reset_password() {
        return view('guest.reset-password');
    }
    public function index() {
        return view('index');
    }
    public function verify() {
        return view('guest.verify');
    }

}
