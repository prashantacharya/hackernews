import React, { useContext, Fragment } from 'react';
import { GoComment } from 'react-icons/go';
import { useRouteMatch } from 'react-router-dom';
import { AiOutlineStar, AiOutlineUser, AiOutlineLink } from 'react-icons/ai';

import { StoriesContext } from '../../Context/StoriesContext';
import Comment from '../../Components/Comment';
import './story.css';

function Story() {
  const match = useRouteMatch();
  const context = useContext(StoriesContext);
  const data = context.data.data;
  const post = data.filter((element) => element.id === +match.params.id)[0];

  return (
    <div className="story">
      <div className="container">
        {post ? (
          <Post post={post} />
        ) : (
          <p style={{ textAlign: 'center' }}>Loading</p>
        )}
      </div>
    </div>
  );
}

function Post({ post }) {
  return (
    <Fragment>
      <div className="story-header">
        <h2>{post.title}</h2>
        <ul className="story-details">
          <li>
            <AiOutlineStar /> {post.score}
          </li>
          <li>
            <GoComment /> {post.descendants}
          </li>
          <li>
            <AiOutlineUser /> {post.by}
          </li>
          {post.url && (
            <li>
              <AiOutlineLink />{' '}
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                View Story
              </a>
            </li>
          )}
        </ul>
      </div>

      {post.text && (
        <p
          className="post-text"
          dangerouslySetInnerHTML={{ __html: post.text }}
        />
      )}
      {post.kids && <h3 style={{ marginTop: 25 }}>Comments: </h3>}
      <Comment comments={post.kids} />
    </Fragment>
  );
}

export default Story;
