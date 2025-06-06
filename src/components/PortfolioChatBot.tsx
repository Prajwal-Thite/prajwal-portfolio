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
      <AnimatePresence data-id="uvo8fnxup" data-path="src/components/PortfolioChatBot.tsx">
        {!isOpen &&
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50" data-id="ei1b8ktxc" data-path="src/components/PortfolioChatBot.tsx">

            <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
            size="icon" data-id="r8nq5ky3m" data-path="src/components/PortfolioChatBot.tsx">

              <MessageCircle className="w-6 h-6 text-white" data-id="6nmgkmfl7" data-path="src/components/PortfolioChatBot.tsx" />
            </Button>
          </motion.div>
        }
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence data-id="v40q7etkh" data-path="src/components/PortfolioChatBot.tsx">
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
          className="fixed bottom-6 right-0 z-50 w-96 max-w-[calc(100vw-2rem) ]]" data-id="vly5dwqxj" data-path="src/components/PortfolioChatBot.tsx">

            <Card className="border-0 shadow-2xl overflow-hidden" data-id="4dqs7f2bo" data-path="src/components/PortfolioChatBot.tsx">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4" data-id="x8mbcjtfa" data-path="src/components/PortfolioChatBot.tsx">
                <div className="flex items-center justify-between" data-id="0hctra2na" data-path="src/components/PortfolioChatBot.tsx">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2" data-id="dkdkdwkni" data-path="src/components/PortfolioChatBot.tsx">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center" data-id="wpt2jkt34" data-path="src/components/PortfolioChatBot.tsx">
                      <MessageCircle className="w-4 h-4" data-id="mtlwegc8o" data-path="src/components/PortfolioChatBot.tsx" />
                    </div>
                    Portfolio AI Assistant
                  </CardTitle>
                  <div className="flex gap-2" data-id="rrmzb8av8" data-path="src/components/PortfolioChatBot.tsx">
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-8 h-8 text-white hover:bg-white/20" data-id="ri112xr4e" data-path="src/components/PortfolioChatBot.tsx">

                      <Minimize2 className="w-4 h-4" data-id="47tixvhvc" data-path="src/components/PortfolioChatBot.tsx" />
                    </Button>
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 text-white hover:bg-white/20" data-id="6satabt4z" data-path="src/components/PortfolioChatBot.tsx">

                      <X className="w-4 h-4" data-id="yl9clm753" data-path="src/components/PortfolioChatBot.tsx" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90" data-id="7xvuomoau" data-path="src/components/PortfolioChatBot.tsx">
                  <div className="w-2 h-2 bg-green-400 rounded-full" data-id="kcmp360p7" data-path="src/components/PortfolioChatBot.tsx"></div>
                  Online - Ready to help!
                </div>
              </CardHeader>

              <AnimatePresence data-id="32d3fxyog" data-path="src/components/PortfolioChatBot.tsx">
                {!isMinimized &&
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} data-id="do4p50sgs" data-path="src/components/PortfolioChatBot.tsx">

                    <CardContent className="p-0" data-id="kovqlg448" data-path="src/components/PortfolioChatBot.tsx">
                      {/* Messages Area */}
                      <div className="min-h-[310px] max-h-[550px] overflow-y-auto p-4 bg-gray-50" data-id="qtjwmwcyk" data-path="src/components/PortfolioChatBot.tsx">
                        {messages.map((message) =>
                    <ChatMessage
                      key={message.id}
                      message={message.text}
                      isBot={message.isBot}
                      timestamp={message.timestamp} data-id="sgbk262nx" data-path="src/components/PortfolioChatBot.tsx" />

                    )}

                        {/* Typing Indicator */}
                        {isTyping &&
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-3 mb-4" data-id="fluyi93f9" data-path="src/components/PortfolioChatBot.tsx">

                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center" data-id="1k0678l31" data-path="src/components/PortfolioChatBot.tsx">
                              <MessageCircle className="w-4 h-4 text-white" data-id="19o81o63k" data-path="src/components/PortfolioChatBot.tsx" />
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-3" data-id="3vzsnja40" data-path="src/components/PortfolioChatBot.tsx">
                              <div className="flex gap-1" data-id="2pd2ipe52" data-path="src/components/PortfolioChatBot.tsx">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" data-id="rijzvqtmb" data-path="src/components/PortfolioChatBot.tsx"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} data-id="c37l2b0jc" data-path="src/components/PortfolioChatBot.tsx"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} data-id="6rvd7bwwb" data-path="src/components/PortfolioChatBot.tsx"></div>
                              </div>
                            </div>
                          </motion.div>
                    }

                        <div ref={messagesEndRef} data-id="7y2pmy1bh" data-path="src/components/PortfolioChatBot.tsx" />
                      </div>

                      {/* Quick Questions */}
                      {messages.length === 1 &&
                  <div className="p-4 border-t bg-white" data-id="vwmid05rf" data-path="src/components/PortfolioChatBot.tsx">
                          <p className="text-sm text-gray-600 mb-3" data-id="1at9lcha0" data-path="src/components/PortfolioChatBot.tsx">Quick questions:</p>
                          <div className="space-y-2" data-id="ik787jdy4" data-path="src/components/PortfolioChatBot.tsx">
                            {quickQuestions.map((question, index) =>
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full justify-center text-left h-auto p-2 text-sm" data-id="2y84zwhfo" data-path="src/components/PortfolioChatBot.tsx">

                                {question}
                              </Button>
                      )}
                          </div>
                        </div>
                  }

                      {/* Input Area */}
                      <div className="p-4 border-t bg-white" data-id="ttygvx0xb" data-path="src/components/PortfolioChatBot.tsx">
                        <div className="flex gap-2" data-id="ssp66k2fk" data-path="src/components/PortfolioChatBot.tsx">
                          <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me anything about this portfolio..."
                        className="flex-1"
                        disabled={isTyping} data-id="bk5fraq18" data-path="src/components/PortfolioChatBot.tsx" />

                          <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                        size="icon" data-id="zjjttyuz7" data-path="src/components/PortfolioChatBot.tsx">

                            <Send className="w-4 h-4" data-id="ckjxwk2eh" data-path="src/components/PortfolioChatBot.tsx" />
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2" data-id="fectoaabz" data-path="src/components/PortfolioChatBot.tsx">
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