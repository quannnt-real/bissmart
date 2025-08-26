import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from './ui/sheet';
import { MessageCircle, Send, X } from 'lucide-react';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Xin chào! Tôi có thể hỗ trợ gì cho bạn?",
      sender: "support",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Auto reply (mock)
      setTimeout(() => {
        const reply = {
          id: messages.length + 2,
          text: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.",
          sender: "support",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, reply]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 bg-bis-primary hover:bg-bis-primary/90 text-white rounded-full w-14 h-14 shadow-lg transition-all duration-200 transform hover:scale-110 z-50"
            size="lg"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        
        <SheetContent side="right" className="w-80 p-0">
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <SheetHeader className="bg-bis-primary text-white p-4">
              <SheetTitle className="text-white text-left">
                Hỗ trợ trực tuyến
              </SheetTitle>
              <p className="text-blue-100 text-sm text-left">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn
              </p>
            </SheetHeader>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-bis-primary text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Nhập tin nhắn..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-bis-primary hover:bg-bis-primary/90 text-white"
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ChatWidget;