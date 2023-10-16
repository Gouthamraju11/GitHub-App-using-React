import React, { useState } from "react";
import './FormStyle.css';

interface IfirstChildProps {
  updateRepositories: (arg: string) => void;
}

export const Form: React.FC<IfirstChildProps> = ({ updateRepositories }) => {
  const [userName, setUserName] = useState<string>('');

  return (
    <section style={{ display: 'flex', justifyContent: 'center' }}>
      <input
        type='text'
        className='input'
        value={userName}
        onChange={event => setUserName(event.target.value)}
        placeholder='language or user or name'
        required
      />
      <button className='button searchButton' onClick={() => updateRepositories(userName)}>
        Search
      </button>
    </section>
  );
};
