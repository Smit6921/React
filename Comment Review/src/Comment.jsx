import React from 'react'
import { useState } from 'react';

export default function Comment() {
    const [comment, setComment] = useState('');
    const [showComment, setShowComment] = useState(false);

    const handleInputChange = (e) => {
    setComment(e.target.value);
    };

    const handleSubmit = () => {
    setShowComment(true);
    };

  return (
    <div>
      <div className="commentreview">
      <h2 className='ForH2'>Comment Review</h2>
      <hr />
      <textarea
        rows={5}
        cols={50}
        value={comment}
        onChange={handleInputChange}
        placeholder="Enter your comment here"
        className="ForInput"
      />
      <button onClick={handleSubmit} className="ForBTn">Submit Comment</button> 
      <br/><br/>
      {showComment && (
        <div className="comment-preview">
          <p className="ForPreview">Your Comment:</p>
          <p className="ForOutput">{comment}</p>
        </div>
      )}
    </div>
    </div>
  )
}
