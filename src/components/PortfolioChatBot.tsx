import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ChatMessage from '@/components/ChatMessage';
import { generateResponse_ai } from '@/lib/groqConfig';



interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const PortfolioChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    text: "Hi! I'm an AI assistant trained on this portfolio. I can answer questions about projects, experience, skills, and more. What would you like to know?",
    isBot: true,
    timestamp: new Date()
  }]
  );
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await generateResponse_ai(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response || "I'll help you with that!",
        isBot: true,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };


  const quickQuestions = [
  "What projects have you worked on?",
  "Can you share your experience in web development?",
  "Which technologies are you most comfortable with?",
  "How can I get in touch with you?",    
  ];


  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen &&
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50">

            <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
            size="icon">

              <MessageCircle className="w-6 h-6 text-white"/>
            </Button>
          </motion.div>
        }
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 0.8,
            height: isMinimized ? 'auto' : '650px'
          }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          className="fixed bottom-6 right-0 z-50 w-96 max-w-[calc(100vw-2rem) ]]">

            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4"/>
                    </div>
                    Portfolio AI Assistant
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-8 h-8 text-white hover:bg-white/20">

                      <Minimize2 className="w-4 h-4"/>
                    </Button>
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 text-white hover:bg-white/20">

                      <X className="w-4 h-4"/>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Online - Ready to help!
                </div>
              </CardHeader>

              <AnimatePresence>
                {!isMinimized &&
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}>

                    <CardContent className="p-0">
                      {/* Messages Area */}
                      <div className="min-h-[310px] max-h-[550px] overflow-y-auto p-4 bg-gray-50">
                        {messages.map((message) =>
                    <ChatMessage
                      key={message.id}
                      message={message.text}
                      isBot={message.isBot}
                      timestamp={message.timestamp}/>

                    )}

                        {/* Typing Indicator */}
                        {isTyping &&
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-3 mb-4">

                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <MessageCircle className="w-4 h-4 text-white"/>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-3">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                            </div>
                          </motion.div>
                    }

                        <div ref={messagesEndRef}/>
                      </div>

                      {/* Quick Questions */}
                      {messages.length === 1 &&
                  <div className="p-4 border-t bg-white">
                          <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
                          <div className="space-y-2">
                            {quickQuestions.map((question, index) =>
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full justify-center text-left h-auto p-2 text-sm">

                                {question}
                              </Button>
                      )}
                          </div>
                        </div>
                  }

                      {/* Input Area */}
                      <div className="p-4 border-t bg-white">
                        <div className="flex gap-2">
                          <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me anything about this portfolio..."
                        className="flex-1"
                        disabled={isTyping}/>

                          <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                        size="icon">

                            <Send className="w-4 h-4"/>
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Press Enter to send • AI responses may take a moment
                        </p>
                      </div>
                      
                    </CardContent>
                  </motion.div>
              }
              </AnimatePresence>
            </Card>
          </motion.div>
        }
      </AnimatePresence>
    </>);

};

export default PortfolioChatBot;