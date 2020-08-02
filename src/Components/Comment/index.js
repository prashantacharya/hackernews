import React, { Component } from 'react';
import './comment.css';
import Axios from 'axios';
import { BASE_URL } from '../../constants';
import { AiOutlineUser } from 'react-icons/ai';

class Comment extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  async componentDidMount() {
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
