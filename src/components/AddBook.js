import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });
  const { title, author } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(postBook({ ...formData, id: uuid() }));
    setFormData({
      title: '',
      author: '',
    });
  };

  return (
    <form>
      <input value={title} placeholder="Title" type="text" name="title" onChange={handleChange} />
      <input value={author} placeholder="Author" type="text" name="author" onChange={handleChange} />
      <input
        type="submit"
        value="Add New"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </form>
  );
};

export default AddBook;
