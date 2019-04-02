import React from 'react';
import './Types.scss';

function Types(props) {
    return (
        <>
      <input id={props.inputId} className={props.inputClass} name={props.inputName} type={props.inputType} value={props.inputValue} defaultChecked={props.checkedByDefault} /><label htmlFor={props.inputId}>{props.inputText}</label>
        </>
    )
}

export default Types;