import React from 'react';

interface BoxProps {
  addClickHandler: () => void
}

const Box: React.FC<BoxProps> = ({addClickHandler}) => {
  return (
    <button onClick={addClickHandler}>ADD 1</button>
  )
}

export default Box;