import React from "react";
import MessagesPanels from "../../Components/MessagesPanels";
import MessagesLists from "../../Components/MessagesLists";
import ChatHeaders from "../../Components/ChatHeaders";
import MessagesSender from "../../Components/MessagerSender";
import requireAuth from "@/security/ProtectedRoute";

const messagesList = [
  { id: 1, messages: "Bonjour, comment vas-tu ?", sender_or_receiver: true },
  {
    id: 2,
    messages: "Je vais bien, merci ! Et toi ?",
    sender_or_receiver: false,
  },
  { id: 3, messages: "Je vais bien aussi, merci !", sender_or_receiver: true },
  { id: 4, messages: "C'est super !", sender_or_receiver: false },
  { id: 5, messages: "On se voit demain ?", sender_or_receiver: true },
  { id: 6, messages: "Oui, à demain !", sender_or_receiver: false },
];

const ChatPanels = () => {
  return (
    <div className="hidden lg:col-span-2 lg:block">
      <div className="w-full">
        <ChatHeaders name={""} profile_pic={""} is_connected={false} />

        <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
          <ul className="space-y-2">
            <MessagesLists Donne={messagesList} />
          </ul>
        </div>
        <MessagesSender />
      </div>
    </div>
  );
};

export default requireAuth(ChatPanels);
