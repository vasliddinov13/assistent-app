import React from 'react'
import ReactMarkdown from 'react-markdown'
function View({content}) {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}

export default View