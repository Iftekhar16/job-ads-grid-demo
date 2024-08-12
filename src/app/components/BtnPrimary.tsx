import React from 'react';

const BtnPrimary = ({children}:any) => {
    return (
        <button className="bg-gradient-to-r from-[#7932B0] to-[#3A28B9] rounded-lg px-5 py-2 flex justify-center md:justify-start items-center gap-3">{children}</button>
    );
};

export default BtnPrimary;