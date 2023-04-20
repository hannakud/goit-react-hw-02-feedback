export const Statistics = ({ good, neutral, bad, count, percentage }) => (
  <ul>
    <li>
      <span>Good:</span>
      <span>{good}</span>
    </li>
    <li>
      <span>Neutral:</span>
      <span>{neutral}</span>
    </li>
    <li>
      <span>Bad:</span>
      <span>{bad}</span>
    </li>
    <li>
      <span>Total:</span>
      <span>{count}</span>
    </li>
    <li>
      <span>Positive feedback:</span>
      <span>{percentage}%</span>
    </li>
  </ul>
);
