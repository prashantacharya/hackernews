import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { StoriesContext } from '../../Context/StoriesContext';

function Story() {
  const match = useRouteMatch();
  const context = useContext(StoriesContext);
  const data = context.data.data;
  const post = data.filter((element) => element.id === +match.params.id)[0];
  console.log(post);

  return (
    <div className="story">
      <div className="container">
        <h2>{post?.title}</h2>
      </div>
    </div>
  );
}

export default Story;
