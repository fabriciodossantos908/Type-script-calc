import React, { InputHTMLAttributes } from 'react';

// extends InputHTMLAttributes<HTMLInputElement> --> telling for our interface that they extends all the inputs atributes

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

// ...rest --> Putting all the remain properties inside a var

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>

    );
}

export default Input;