import React from 'react';
import { useRouteMatch } from 'react-router-dom';

function Story() {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div className="story">
      <div className="container">
        <p>Story: {match.params.id}</p>
      </div>
    </div>
  );
}

export default Story;
