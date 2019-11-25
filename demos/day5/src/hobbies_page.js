import React from 'react';

export default function HobbiesPage(props) {
  const { hobbies, setHobbies } = props;

  const allHobbies = ['skiing', 'dancing', 'coding'];

  function changeHobby(add, hobbyName) {
    if (add) {
      setHobbies(hobbies.concat([hobbyName]));
    } else {
      setHobbies(hobbies.filter(h => h !== hobbyName));
    }
  }

  return (
    <div>
      <ul>
        {
          allHobbies.map(hobby => (
            <li key={hobby}>
              <input
              type="checkbox"
              checked={hobbies.includes(hobby)}
              onChange={(e) => changeHobby(
                e.target.checked,
                hobby)
              }
              />
              {hobby}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

