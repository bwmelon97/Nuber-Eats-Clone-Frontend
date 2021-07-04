import { BASIC_USER_IMG } from "@constants";
import { useMe } from "@hooks";
import React from "react";

type UserProfileImageProps = {
    size: 'sm' | 'l'
}

const UserProfileImage: React.FC<UserProfileImageProps> = ({ size }) => {
    const { data } = useMe()
    return (
        <div 
            className={`
                ${size === 'sm' && 'h-8 w-8'}
                ${size === 'l'  && 'h-8 w-8'}
                rounded-full cursor-pointer bg-cover border border-black` 
            }
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