import React, { Component } from 'react';

import Axios from 'axios';
import { AiOutlineUser } from 'react-icons/ai';

import { BASE_URL } from '../../constants';

import './comment.css';

class Comment extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  fetchComments = async () => {
    try {
      const promises = this.props.comments.map((comment) =>
        Axios.get(`${BASE_URL}/item/${comment}.json`)
      );

      const response = await Promise.all(promises);
      const data = await response.map((res) => res.data);
      this.setState({ data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="comments-wrapper">
        {this.state.isLoading && <p style={{ textAlign: 'center' }}>Loading</p>}
        <ul>
          {this.state.data.map((comment) => (
            <CommentItem comment={comment} key={comment.id} />
          ))}
        </ul>
      </div>
    );
  }
}

function CommentItem({ comment }) {
  return (
    <li className="comment-item">
      <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>
      <div className="comment-by">
        <AiOutlineUser /> {comment.by}
      </div>

      {comment.kids && <Comment comments={comment.kids} />}
    </li>
  );
}

Comment.defaultProps = {
  comments: [],
};

export default Comment;
