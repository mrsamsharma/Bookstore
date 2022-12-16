import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.updateCategories);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <button type="button" onClick={() => dispatch(status())}>Check Status</button>
      <p>{categories}</p>
    </>
  );
};
export default Categories;
