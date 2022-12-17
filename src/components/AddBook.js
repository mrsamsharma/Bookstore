import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
  });
  const { title, author } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBook({ ...formData, item_id: uuid() }));
    setFormData({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={title} placeholder="Title" type="text" name="title" onChange={handleChange} required />
        <input value={author} placeholder="Author" type="text" name="author" onChange={handleChange} required />
        <input type="submit" value="Add New" />
      </form>
    </section>
  );
};

export default AddBook;
