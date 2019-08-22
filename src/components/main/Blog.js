import React from 'react';

// components
import Heading from '../common/Heading';
import Article from '../common/Article';

function Blog() {
  return (
    <div className='blog'>
      <Heading text='Blog'/>
      <div className=''>
        <Article />
      </div>
    </div>
  );
}

export default Blog;
