import React from 'react';

function Text(props) {
  let text = props.text.map((text) => {
    return (<p>{text}</p>);
  });
  return (
    <div>
      {text}
    </div>
  );
}

export { Text };
