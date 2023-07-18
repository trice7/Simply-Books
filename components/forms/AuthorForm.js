import {
  Form,
  InputGroup,
  FloatingLabel,
  Button,
} from 'react-bootstrap';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { createAuthor, updateAuthor } from '../../api/authorData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
};

const AuthorForm = ({ obj }) => {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateAuthor(formInput).then(() => router.push(`/author/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      console.warn(payload);
      createAuthor(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateAuthor(patchPayload).then(() => {
          router.push('/author/authors');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Author</h2>
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control
          aria-label="First name"
          type="text"
          placeholder="Author First Name"
          name="first_name"
          value={formInput.first_name}
          onChange={handleChange}
          required
        />
        <Form.Control
          aria-label="Last name"
          type="text"
          placeholder="Author Last Name"
          name="last_name"
          value={formInput.last_name}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <FloatingLabel controlId="floatingInput1" label="Email" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@email.com"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button>
    </Form>
  );
};

AuthorForm.propTypes = {
  obj: {
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
  },
};

AuthorForm.defaultProps = {
  obj: initialState,
};

export default AuthorForm;
