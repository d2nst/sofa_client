import { useEffect, useState } from 'react';

export default function List() {
  const [text, setText] = useState('');
  useEffect(() => {
    setText(text);
  });
  return (
    <>
      <div>{text}</div>
      <input type="text" />
      <img src="" alt="" />
    </>
  );
}
