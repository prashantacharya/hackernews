import React from 'react';
import { Link } from 'react-router-dom';
import { GoComment } from 'react-icons/go';
import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';

import './postlist.css';

function PostList(props) {
  return (
    <li className="story-card">
      <Link to={`/story/${props.post.id}`}>
        <h2>{props.post.title}</h2>
      </Link>

      <ul className="story-details">
        <li>
          <AiOutlineStar /> {props.post.score}
        </li>
        <li>
          <GoComment /> {props.post.descendants}
        </li>
        <li>
          <AiOutlineUser /> {props.post.by}
        </li>
      </ul>
    </li>
  );
}

export default PostList;
