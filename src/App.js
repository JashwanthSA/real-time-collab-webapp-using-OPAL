import React, { useState } from 'react';
import { saveDocument } from './api';

function App() {
  const [user, setUser] = useState('');
  const [document, setDocument] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = async () => {
    try {
      const response = await saveDocument(user, document);
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="User" 
        value={user} 
        onChange={e => setUser(e.target.value)} 
      />
      <textarea 
        placeholder="Document" 
        value={document} 
        onChange={e => setDocument(e.target.value)} 
      />
      <button onClick={handleSave}>Save Document</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
