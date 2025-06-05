import { motion } from 'motion/react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  const formatMessage = (text: string) => {
    // Convert markdown-style formatting to JSX
    const parts = text.split(/(\*\*.*?\*\*|\n)/);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-gray-900" data-id="rvdh844dw" data-path="src/components/ChatMessage.tsx">{part.slice(2, -2)}</strong>;
      }
      if (part === '\n') {
        return <br key={index} data-id="6d0drg2aj" data-path="src/components/ChatMessage.tsx" />;
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 mb-4 ${isBot ? 'justify-start' : 'justify-end'}`} data-id="zcf2jk085" data-path="src/components/ChatMessage.tsx">

      {isBot &&
      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center" data-id="bge5ifz6r" data-path="src/components/ChatMessage.tsx">
          <Bot className="w-4 h-4 text-white" data-id="dxs381wec" data-path="src/components/ChatMessage.tsx" />
        </div>
      }
      
      <div className={`max-w-[80%] ${isBot ? 'order-2' : 'order-1'}`} data-id="mib0k7wcv" data-path="src/components/ChatMessage.tsx">
        <div
          className={`p-3 rounded-lg ${
          isBot ?
          'bg-white border border-gray-200 text-gray-800 shadow-sm' :
          'bg-gradient-to-r from-blue-500 to-purple-500 text-white'}`
          } data-id="pbdf2lw28" data-path="src/components/ChatMessage.tsx">

          <div className="text-sm leading-relaxed whitespace-pre-wrap" data-id="ghj5ux7ht" data-path="src/components/ChatMessage.tsx">
            {isBot ? formatMessage(message) : message}
          </div>
        </div>
        <div className={`text-xs text-gray-500 mt-1 ${isBot ? 'text-left' : 'text-right'}`} data-id="jb4qjt24x" data-path="src/components/ChatMessage.tsx">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {!isBot &&
      <div className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center order-2" data-id="xfmmsiits" data-path="src/components/ChatMessage.tsx">
          <User className="w-4 h-4 text-white" data-id="fbcgq3mih" data-path="src/components/ChatMessage.tsx" />
        </div>
      }
    </motion.div>);

};

export default ChatMessage;