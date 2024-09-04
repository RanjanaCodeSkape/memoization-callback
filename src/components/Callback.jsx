import { useState } from 'react';
import CallbackChild from './CallbackChild';

function ParentComponent() {
  const [message, setMessage] = useState('Hello from Callback parent!');

  //  callback function that will be passed to the child
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>{message}</h1>
      {/* pass prop */}
      <CallbackChild onMessageChange={updateMessage} />
    </div>
  );
}

export default ParentComponent;



