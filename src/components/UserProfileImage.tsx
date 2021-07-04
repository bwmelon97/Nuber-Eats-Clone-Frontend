import { BASIC_USER_IMG } from "@constants";
import { useMe } from "@hooks";
import React from "react";

type UserProfileImageProps = {
    size: 'sm' | 'lg';
    className?: string;
}

const UserProfileImage: React.FC<UserProfileImageProps> = ({ size, className }) => {
    const { data } = useMe()
    return (
        <div 
            className={`
                ${size === 'sm' && 'h-8 w-8'}
                ${size === 'lg'  && 'h-64 w-64'}
                rounded-full cursor-pointer bg-cover border border-black
                ${className && className}
            `}
            style={{
                backgroundImage: ( data?.me.profileImg ? 
                    `url(${data.me.profileImg})` : 
                    `url(${BASIC_USER_IMG})`
                ),
            }}    
        />
    )
}

export default UserProfileImage