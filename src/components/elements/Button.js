import React from 'react';

const Button = ({children, className}) => {
    return (
        <div>
            <button className={`${className} px-4 py-3 uppercase shadow-xl text-white tracking-widest text-sm font-medium animate`}>
                {children}
            </button>
            
        </div>
    );
};

export default Button;