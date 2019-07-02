import React from 'react';

function MultipleParagraphs(props) {
  let text = props.text.map((text) => {
    return (<p>{text}</p>);
  });
  return (
    <p>{text}</p>
  );
}

export { MultipleParagraphs };
