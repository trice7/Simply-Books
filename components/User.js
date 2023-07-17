/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

const User = ({ userObj }) => {
  console.warn('User Placeholder');

  return (
    <>
      <img src={userObj.image} alt="" />
      <p type="email">{userObj.email}</p>
      <p type="text">{userObj.displayName}</p>
      <p>{userObj.metadata.lastSignInTime}</p>
    </>
  );
};

User.propTypes = {
  userObj: {
    image: PropTypes.string,
    email: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    lastSignInTime: PropTypes.string,
  }.isRequired,
};

export default User;
