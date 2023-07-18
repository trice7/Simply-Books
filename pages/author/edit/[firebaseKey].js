import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getSingleAuthor } from '../../../api/authorData';
import AuthorForm from '../../../components/forms/AuthorForm';

const EditAuthor = () => {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<AuthorForm obj={editItem} />);
};

export default EditAuthor;
