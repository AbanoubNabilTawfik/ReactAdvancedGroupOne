import React from 'react'

function Memo() {
    console.log("Rerender memo component")
  return (
    <div>
      
    </div>
  )
}

export default React.memo(Memo) 
