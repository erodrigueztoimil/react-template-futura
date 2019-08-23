import React from 'react';

// css
import '../../css/Blog.css';

// components
import Article from '../common/Article';

function Blog() {
  return (
    <div className='blog'>
      <Article
        type='s'
      />
    </div>
  );
}

export default Blog;
