import { useState } from 'react';

const Counter = () => {
  // TODO: Create a piece of state and initialize it to 0
  const [count, setCount] = useState(0);
  
 
  // TODO: Render current value
  return (
    <div>
      Count: {count}
      {/* TODO: Add "Increment" button to increase count by 1 */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      {/* TODO: Add "Decrement" button to decrease count by 1 */}
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      {/* TODO: Add "Reset" button to reset count to 0 */}
      <button onClick={() => setCount(0)}>Reset</button>
      {/* TODO: Add "Change sign" button to toggle between positive and negative count */}
      <button onClick={() => setCount((prev) => prev * -1)}>Change sign</button>
    </div>
  );
};

export default Counter;
