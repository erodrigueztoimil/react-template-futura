import React from 'react';

function Paragraph(props) {
  let text = props.text.map((text) => {
    return (<p>{text}</p>);
  });
  return (
    <div>
      {text}
    </div>
  );
}

export { Paragraph };
