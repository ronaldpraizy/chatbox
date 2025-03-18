import React, { useState } from 'react';

const OpenAssistantGPT = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    if (message.trim() === '') return;

    // Add user message to chat
    setChat([...chat, { sender: 'user', text: message }]);

    // Simulate a bot response
    const response = `Echo: ${message}`;

    // Add bot response to chat
    setChat([...chat, { sender: 'user', text: message }, { sender: 'bot', text: response }]);
    setMessage('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>OpenAssistantGPT</h1>
      <div style={{ border: '1px solid #ccc', height: '400px', overflowY: 'scroll', padding: '10px', marginBottom: '10px' }}>
        {chat.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', marginBottom: '10px' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        style={{ width: 'calc(100% - 90px)', padding: '10px', marginRight: '10px' }}
        placeholder="Type a message..."
      />
      <button onClick={handleSend} style={{ width: '80px', padding: '10px' }}>
        Send
      </button>
    </div>
  );
};

export default OpenAssistantGPT;