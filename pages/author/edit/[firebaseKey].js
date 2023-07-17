import { useRouter } from 'next/router';

const EditAuthor = () => {
  const router = useRouter();
  const { firebaseKey } = router.query;

  return (
    <>
      <p>{firebaseKey} Place Holder EditAuthor</p>
    </>
  );
};

export default EditAuthor;
