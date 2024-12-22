'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

const Comment = ({ comment }: { comment: string }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prev: boolean) => !prev);
  };
  const longComment = comment.length > 130;
  const displayComment =
    longComment && !expanded ? `${comment.slice(0, 130)}...` : comment;

  return (
    <div>
      <p className='text-sm'>{displayComment}</p>
      {longComment && (
        <Button
          className='pl-0 text-muted-foreground'
          onClick={toggleExpanded}
          variant='link'
        >
          {expanded ? 'Show less' : 'Show more'}{' '}
        </Button>
      )}
    </div>
  );
};
export default Comment;
