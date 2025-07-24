import React from 'react'
import ReactMarkdown from 'react-markdown'
function View({content}) {
  return (
    <div className='content-wrapper'>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default View