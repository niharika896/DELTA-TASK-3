import { set } from 'mongoose';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
function Chatbot() {
    const Email = useSelector(state => state.Email.value);
    const City = useSelector(state => state.City.value);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async(e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(msgs => [...msgs,{ from: 'user', text: input }]);
    setInput('');
    let reply = await fetch('http://localhost:4000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email:Email,convo: messages,city:City })
    })
    if (reply.ok) {
        let data = await reply.json();
        setMessages(msgs => [...msgs, { from: 'bot', text: data.candidates[0].content.parts[0].text }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="bg-white shadow-lg rounded-lg w-72 h-96 flex flex-col">
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
            <span>Chatbot</span>
            <button onClick={() => setOpen(false)} className="text-xl">×</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'user' ? 'text-right' : 'text-left'}>
                <span className={msg.from === 'user' ? 'bg-blue-100 text-blue-800 px-2 py-1 rounded-lg inline-block' : 'bg-gray-100 text-gray-800 px-2 py-1 rounded-lg inline-block'}>
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex border-t">
            <input
              className="flex-1 px-2 py-1 outline-none"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type..."
            />
            <button type="submit" className="px-3 py-1 text-blue-600">Send</button>
          </form>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="bg-blue-600 text-white rounded-full px-4 py-2 shadow-lg">Chat</button>
      )}
    </div>
  );
}

export default Chatbot;
