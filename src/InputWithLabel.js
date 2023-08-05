import React, { useRef, useEffect } from 'react';

function InputWithLabel({ label, value, onChange }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });
  
  return (
    <>
      {/* replaced the label prop with the children prop. */}
      <label htmlFor="todoTitle">{label}</label>
      {/* assiging the value todoTitle to the input and setting the onChange to call the function handleTitleChange*/}
      {/* focus is needed to make the user experience better by focusing on the input field without needing to use a mouse */}
      <input  type="text" id="todoTitle" name="title" value={value} onChange={onChange} ref={inputRef}></input>
    </>
  )
};



export default InputWithLabel

