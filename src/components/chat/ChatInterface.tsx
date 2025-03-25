
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Paperclip, Smile, Image, Mic } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Message {
  id: string;
  sender: string;
  avatar?: string;
  content: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

interface ChatInterfaceProps {
  eventId: string;
  eventTitle: string;
}

export function ChatInterface({ eventId, eventTitle }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "John Doe",
      avatar: "https://github.com/shadcn.png",
      content: "Hey everyone! Excited about this event!",
      timestamp: new Date(Date.now() - 3600000),
      isCurrentUser: false,
    },
    {
      id: "2",
      sender: "Alice Smith",
      avatar: "https://github.com/shadcn.png",
      content: "Does anyone know if we need to bring our own laptops?",
      timestamp: new Date(Date.now() - 1800000),
      isCurrentUser: false,
    },
    {
      id: "3",
      sender: "You",
      content: "Yes, the organizer mentioned that we should bring laptops for the coding session.",
      timestamp: new Date(Date.now() - 900000),
      isCurrentUser: true,
    },
    {
      id: "4",
      sender: "Alice Smith",
      avatar: "https://github.com/shadcn.png",
      content: "Thank you! Looking forward to it!",
      timestamp: new Date(Date.now() - 600000),
      isCurrentUser: false,
    },
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "You",
      content: newMessage,
      timestamp: new Date(),
      isCurrentUser: true,
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="flex flex-col h-[600px] border rounded-lg bg-background">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <h3 className="font-semibold">{eventTitle} - Chat</h3>
          <div className="ml-2 flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-muted-foreground ml-1">Live</span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          {messages.length > 0 ? `${messages.length} messages` : "No messages yet"}
        </div>
      </div>
      
      {/* Chat Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex ${message.isCurrentUser ? "flex-row-reverse" : "flex-row"} items-start gap-2 max-w-[80%]`}>
                {!message.isCurrentUser && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={message.avatar} alt={message.sender} />
                    <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <div className={`flex items-center ${message.isCurrentUser ? "justify-end" : "justify-start"} mb-1`}>
                    <span className="text-xs font-medium mr-2">{message.sender}</span>
                    <span className="text-xs text-muted-foreground">{formatTime(message.timestamp)}</span>
                  </div>
                  <div
                    className={`rounded-lg px-3 py-2 text-sm ${
                      message.isCurrentUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <Separator />
      
      {/* Chat Input */}
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" type="button" className="rounded-full">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" type="button" className="rounded-full">
            <Image className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="flex-1"
          />
          <Button variant="outline" size="icon" type="button" className="rounded-full">
            <Smile className="h-4 w-4" />
          </Button>
          <Button size="icon" type="button" onClick={handleSendMessage} className="rounded-full">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
