import React, { InputHTMLAttributes } from 'react';

// extends InputHTMLAttributes<HTMLInputElement> --> telling for our interface that they extends all the inputs atributes

import './styles.css'

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

// ...rest --> Putting all the remain properties inside a var

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea type="text" id={name} {...rest} />
        </div>

    );
}

export default Textarea;