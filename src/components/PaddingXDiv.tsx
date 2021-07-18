import React from "react";
import { OverWriteClassNameAndStyleProps } from "@components/OverWriteProps";


const PaddingXRule: React.FC<
    OverWriteClassNameAndStyleProps
> = ({ className, children, style }) => (
    <div 
        style={style}
        className={`px-5 lg:px-10 ${className && className}`}
    >
        {children}
    </div>
)

export default PaddingXRule