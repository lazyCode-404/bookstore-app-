import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

// eslint-disable-next-line react/prop-types
function Categories({ categories }) {
  const dispatch = useDispatch();

  const statusCheck = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="check-btn">
      <button type="button" onClick={() => statusCheck()}>Check status</button>
      <br />
      { categories }
    </div>
  );
}
Categories.defaultProps = {
  categories: [],
};
export default Categories;
