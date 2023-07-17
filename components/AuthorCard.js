import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';

const AuthorCard = ({ authorObj, onUpdate }) => {
  const deleteAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name} ${authorObj.last_name} and all of their books?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(onUpdate);
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
        <Card.Title>{authorObj.email}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
};

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};

AuthorCard.defaultProps = {
  authorObj: PropTypes.shape({
    email: 'TestEmail@email.com',
    first_name: 'John',
    last_name: 'Smith',
  }),
};

export default AuthorCard;
