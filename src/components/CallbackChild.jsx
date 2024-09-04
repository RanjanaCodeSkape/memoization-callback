import React from 'react';

function CallbackChild({ onMessageChange }) {
  const handleClick = () => {
    // callback function update
    onMessageChange('Hello from Callback Child');
  };

  return (
    <div>
      <button onClick={handleClick}>Update Message</button>
    </div>
  );
}

export default CallbackChild;
