import { useState } from 'react';

export default function User() {
  const [text, setText] = useState('');
  const clickHandler = () => {
    setText('joe');
  };
  return (
    <>
      <div onClick={clickHandler}>{text}</div>
    </>
  );
}
