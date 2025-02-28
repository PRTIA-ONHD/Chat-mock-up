import "./messenger.css";
import Bar from "../../components/Bar/Bar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/Message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";

export const Messenger = () => {
  return (
    <>
      <Bar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea className="chatMessageInput" placeholder="write something..."></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>


        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};