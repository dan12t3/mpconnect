import React from 'react';
import { Field } from 'redux-form';

const Input = ({ name, className, component, placeholder, value, onChangeText }) => {

    return (
        <Field 
            name={name}
            className={className}
            component={component}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

export { Input };