const UserList = ({ users }) => {
  // TODO: If users prop is not provided or is an empty array, render:
  //       <div>No users found.</div>
  if (!users || !Array.isArray(users) || users.length === 0) return <div>No users found.</div>;

  // TODO: Otherwise, render a <ul> with one <li> per user
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {/* TODO: Each <li> should include:
              - An <img> with `src` set to user's picture and `alt` set to their name
              - The user's name as text */}
          <img src={user.picture} alt={user.name} />
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
