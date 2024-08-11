import React from 'react';
import Image from 'next/image';

const BtnPrimary = ({children}) => {
    return (
        <button className="w-fit bg-gradient-to-r from-[#7932B0] to-[#3A28B9] rounded-lg px-5 py-2 flex items-center gap-3">{children}</button>
    );
};

export default BtnPrimary;