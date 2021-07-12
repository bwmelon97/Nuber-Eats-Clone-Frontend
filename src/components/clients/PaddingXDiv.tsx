import React from "react";
import { OverWriteClassNameProps } from "@components/OverWriteClassNameProps";


const PaddingXRule: React.FC<OverWriteClassNameProps> = ({ className, children }) => (
    <div className={`px-5 lg:px-10 ${className && className}`}>
        {children}
    </div>
)

export default PaddingXRule