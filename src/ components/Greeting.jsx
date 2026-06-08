const Greeting = ({ name }) => {
  if (name === undefined || name === null) return <div>Hello, stranger!</div>;
  if (typeof name !== 'string') return <div>Hello???</div>;
  if (name === '') return <div>Hello, stranger!</div>;
  return <div>Hello, {name}!</div>;
};

export default Greeting;
