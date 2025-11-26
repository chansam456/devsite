import React from 'react';

interface CommentProps {
    text: string;
}

function Comment(props: CommentProps): React.ReactElement {
    return (
        <div className='comment'>
            <p>{props.text}</p>
        </div>
    );

}

export default Comment;