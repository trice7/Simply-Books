import { useRouter } from 'next/router';

const ViewAuthor = () => {
  const router = useRouter();
  const { firebaseKey } = router.query;

  return (
    <>
      <p>{firebaseKey} test ViewAuther</p>
    </>
  );
};

export default ViewAuthor;
