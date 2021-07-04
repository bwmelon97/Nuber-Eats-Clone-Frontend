import React from "react";
import { Link } from "react-router-dom";
import { authTokenVar, isLoggedInVar } from "@apollo-client";
import { Logo } from "./";
import { AUTH_TOKEN } from "@constants";

const Header = () => {

    const logout = () => {
        localStorage.setItem(AUTH_TOKEN, '')
        authTokenVar(null)
        isLoggedInVar(false)
    }

    return (
        <div className='flex flex-row items-center justify-between px-4 h-16 xl:px-10 xl:h-24' >
            <Link to='/' > <Logo /> </Link>
            <button onClick={logout} >logout</button>
        </div>
    )
}

export default Header;