import React from 'react';

export default function UserDetailsPage(props) {
  const {
    username,
    setUsername,
    password,
    setPassword
  } = props;

  return (
    <div>
      <label>
        Name
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
      </label>
    </div>
  );
}


