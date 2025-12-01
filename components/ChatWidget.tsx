import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Salam! Welcome to Enset. How can I help you navigate our menu or traditions today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const replyText = await getGeminiResponse(inputValue);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: replyText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl mb-4 overflow-hidden border border-gray-200 flex flex-col transition-all animate-in slide-in-from-bottom-5 duration-300" style={{ height: '500px' }}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-enset-green to-green-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                <Sparkles size={16} className="text-enset-gold" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Enset Assistant</h3>
                <p className="text-xs text-green-200">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-enset-green text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className={`text-[10px] mt-1 block opacity-70 ${msg.role === 'user' ? 'text-green-100' : 'text-gray-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 border border-gray-100 shadow-sm flex items-center space-x-2">
                  <Loader2 className="animate-spin text-enset-green" size={16} />
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-enset-green focus-within:bg-white transition-all">
              <input
                type="text"
                placeholder="Ask about dishes..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className={`p-1.5 rounded-full transition-colors ${
                  inputValue.trim() && !isLoading 
                    ? 'bg-enset-green text-white hover:bg-green-800' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } transition-all duration-300 bg-enset-green hover:bg-green-800 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center group`}
      >
        <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-enset-gold rounded-full animate-pulse border-2 border-white"></span>
      </button>

    </div>
  );
};

export default ChatWidget;