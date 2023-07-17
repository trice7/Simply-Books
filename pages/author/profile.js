import React from 'react';
import { useAuth } from '../../utils/context/authContext';
import User from '../../components/User';
import Signout from '../../components/Signout';

const Profile = () => {
  console.warn('PlaceHOlder');
  const { user } = useAuth();

  return (
    <>
      <User userObj={user} />
      <Signout />
    </>
  );
};

export default Profile;
