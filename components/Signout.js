import { Button } from 'react-bootstrap';
import React from 'react';
import { signOut } from '../utils/auth';

const Signout = () => (
  <>
    <Button type="button" size="lg" className="copy-btn" onClick={signOut}>
      Sign Out
    </Button>
  </>
);

export default Signout;
