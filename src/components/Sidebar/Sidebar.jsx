import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  WorkOutline,
  Report,
  Message,
  Mail,
  Feedback,
  PermIdentity,
  AttachMoney,
  Storefront,
} from '@material-ui/icons';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <Link to="/" className="sidebarLink">
                <LineStyle className="sidebar-icon" /> Home{' '}
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" /> Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Link to="/users" className="sidebarLink">
                <PermIdentity className="sidebar-icon" /> Users
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/products" className="sidebarLink">
                {' '}
                <Storefront className="sidebar-icon" /> Products
              </Link>
            </li>
            <li className="sidebar-list-item">
              <AttachMoney className="sidebar-icon" /> Transactions
            </li>
            <li className="sidebar-list-item">
              <Report className="sidebar-icon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notification</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <Mail className="sidebar-icon" /> Mail
            </li>
            <li className="sidebar-list-item">
              <Feedback className="sidebar-icon" /> Feedback
            </li>
            <li className="sidebar-list-item">
              <Message className="sidebar-icon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <WorkOutline className="sidebar-icon" /> Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" /> Analytics
            </li>
            <li className="sidebar-list-item">
              <Report className="sidebar-icon" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
