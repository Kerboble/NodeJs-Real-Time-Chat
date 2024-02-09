import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return ( 
        <div style={{height: '100vh'}}> 
            <PrettyChatWindow 
            projectId='50a5e932-2b48-45dc-aabf-c8a9098ef93b'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
            />
        </div>
    )
  };
  export default ChatsPage;