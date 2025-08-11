import {useState, type ChangeEvent} from 'react';

export function State () {
  const [text, setText] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>O texto é {text}</p>
    </div>
  );
}
