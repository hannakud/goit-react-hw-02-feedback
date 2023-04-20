import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const BUTTONS = [
  {
    title: 'Good',
    value: 'good',
  },
  {
    title: 'Neutral',
    value: 'neutral',
  },
  {
    title: 'Bad',
    value: 'bad',
  },
];

export class FeedbackOptions extends Component {
  render() {
    const { onAddFeedback } = this.props;
    return (
      <div className={css.buttonWrapper}>
        {BUTTONS.map(el => {
          return (
            <button
              className={css.button}
              key={el.value}
              onClick={() => onAddFeedback(el.value)}
            >
              {el.title}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onAddFeedback: PropTypes.func.isRequired,
};

export const Notification = ({ message }) => <div>{message}</div>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
