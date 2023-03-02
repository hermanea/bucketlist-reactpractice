import React, { useState } from 'react';

function Form(props) {
    const [input, setInput] = useState('');


const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
    });

    setInput('');
};

const handleChange = (event) => {
    setInput(event.target.value);
};

return(

);

}


export default Form;