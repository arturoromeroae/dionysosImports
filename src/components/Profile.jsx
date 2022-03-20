import React from 'react';

const Profile = ({ email, name }) => {
  return (
    <>
        <div>
            <p>email: { email }</p>
            <p>name: { name }</p>
        </div>
    </>
  )
}

export default Profile;