import { Component } from 'react';
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
      <div>
        {BUTTONS.map(el => {
          return (
            <button key={el.value} onClick={() => onAddFeedback(el.value)}>
              {el.title}
            </button>
          );
        })}
      </div>
    );
  }
}
