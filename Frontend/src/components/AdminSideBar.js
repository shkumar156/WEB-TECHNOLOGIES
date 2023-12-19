import React from 'react';
import '../components/admin.css';
import Footer from './Footer';
import './adminSideBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faList, faEdit, faTrash, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';

function AdminSideBar() {
  return (
    <>
      <div className="list-group admin-side-bar">
        <Link to="/dashboard" className="list-group-item side-bar-list list-group-item-action !active">
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </Link>
        <Link to="/add" className="list-group-item side-bar-list list-group-item-action !active">
          <FontAwesomeIcon icon={faList} /> All Products
        </Link>
        <Link to="/confirm" className="list-group-item side-bar-list list-group-item-action !active">
          <FontAwesomeIcon icon={faEdit} /> Update Product
        </Link>
        <Link to="/del" className="list-group-item side-bar-list list-group-item-action !active">
          <FontAwesomeIcon icon={faTrash} /> Delete Product
        </Link>
        <Link to="/dash" className="list-group-item side-bar-list list-group-item-action !active">
          <FontAwesomeIcon icon={faPlus} /> Create Product
        </Link>
        <Link to="/settings" className="list-group-item side-bar-list list-group-item-action !active">
          <FontAwesomeIcon icon={faCog} /> Settings
        </Link>
      </div>
    </>
  );
}

export default AdminSideBar;
