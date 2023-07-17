import { useRouter } from 'next/router';
import { React, useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
import AuthBookCard from '../../components/AuthBookCard';

const ViewAuthor = () => {
  const router = useRouter();
  const { firebaseKey } = router.query;
  const [authorDetails, setAuthorDetails] = useState({});
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);
  const booksArr = authorDetails.books;
  console.warn(booksArr);
  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
        <p>{`${authorDetails.first_name} ${authorDetails.last_name}` || ''}</p>
        <hr />
      </div>
      <div>
        {booksArr ? booksArr.map((item) => (
          <AuthBookCard key={item.firebaseKey} bookObj={item} />
        )) : ''}
      </div>
    </div>
  );
};

// `<div className="d-flex flex-column">
//   <img src={bookDetails.image} alt={bookDetails.title} style={{ width: '300px' }} />
// </div>`

// `<h5>
//   {bookDetails.title} by {bookDetails.authorObject?.first_name} {bookDetails.authorObject?.last_name}
//   {bookDetails.authorObject?.favorite ? ' 🤍' : ''}
// </h5>`

// `<p>
//   {bookDetails.sale
//     ? `🏷️ Sale $${bookDetails.price}`
//     : `$${bookDetails.price}`}
// </p>`

export default ViewAuthor;
