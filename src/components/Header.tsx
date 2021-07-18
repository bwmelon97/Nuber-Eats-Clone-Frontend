import React from "react";
import { Link } from "react-router-dom";
import { authTokenVar, isLoggedInVar } from "@apollo-client";
import { Logo } from "./";
import { AUTH_TOKEN, BASIC_USER_IMG } from "@constants";
import { Menu, Dropdown } from 'antd';
import { useMe } from "@hooks";
import PaddingXRule from "./PaddingXDiv";

const logout = () => {
    localStorage.setItem(AUTH_TOKEN, '')
    authTokenVar(null)
    isLoggedInVar(false)
}

const menu = (
    <Menu>
        <Menu.Item >
            <Link to='/edit-profile'>Edit Profile</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={logout}>Logout</Menu.Item>
    </Menu>
);    

const Header = () => {
    const { data } = useMe()
    return (
        <PaddingXRule className='flex flex-row items-center justify-between h-16 lg:h-24' >
            <Link to='/' > <Logo /> </Link>

            <Dropdown overlay={menu} placement="bottomLeft" arrow trigger={['click']}>
               {/* <UserProfileImage size='sm' /> */}
                <div 
                    className={`h-8 w-8 rounded-full cursor-pointer bg-cover border border-black` 
                    }
                    style={{
                        backgroundImage: ( data?.me.profileImg ? 
                            `url(${data.me.profileImg})` : 
                            `url(${BASIC_USER_IMG})`
                        ),
                    }}    
                />
            </Dropdown>
        </PaddingXRule>
    )
}

export default Header;