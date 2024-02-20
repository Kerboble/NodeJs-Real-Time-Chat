import { PrettyChatWindow } from 'react-chat-engine-pretty'


const ChatsPage = (props) => {
    return ( 
        <div style={{height: '100vh'}}> 
            <PrettyChatWindow 
            projectId='efeabda3-44d5-435d-b870-c64fe8005169'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
            renderChatList={(chatAppState) => {<Chatlist />}}
            />
        </div>
    )
  };
  export default ChatsPage;