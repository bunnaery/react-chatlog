import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    const updatedEntry = {
        id: props.id,
        sender: props.sender,
        body: props.body,
        timeStamp: props.timeStamp,
        liked: !props.liked
    };
    props.onUpdate(updatedEntry);
  };

  const heart = props.liked ? '❤️' : '🤍';
  
  const isLocal = (props.sender === 'Vladimir') ? 'local' : 'remote';

  return (
    <div className={'chat-entry ' + isLocal}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={onLikeButtonClick}>{heart}</button>
      </section>
    </div>
  );
};


ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
