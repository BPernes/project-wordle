import React from 'react';

function Banner({ type, children, action }) {
  return (
    <div className={`${type} banner`}>
      {children}
      {action && <button onClick={action}>Restart game</button>}
    </div>
  )
}

export default Banner;
