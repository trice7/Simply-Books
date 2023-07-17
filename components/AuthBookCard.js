import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';

const AuthBookCard = ({ bookObj }) => (
  <Card style={{ width: '18rem', margin: '10px' }}>
    <Card.Img variant="top" src={bookObj.image} alt={bookObj.title} style={{ height: '400px' }} />
    <Card.Body>
      <Card.Title>{bookObj.title}</Card.Title>
      <p className="card-text bold">{bookObj.sale && <span>SALE<br /></span> } ${bookObj.price}</p>
      {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
      <Link href={`/book/${bookObj.firebaseKey}`} passHref>
        <Button variant="primary" className="m-2">VIEW</Button>
      </Link>
      {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
      <Link href={`/book/edit/${bookObj.firebaseKey}`} passHref>
        <Button variant="info">EDIT</Button>
      </Link>
    </Card.Body>
  </Card>
);

AuthBookCard.propTypes = {
  bookObj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    sale: PropTypes.bool,
    price: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default AuthBookCard;
