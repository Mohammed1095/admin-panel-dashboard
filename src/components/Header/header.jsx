import React from 'react';
import './header.css';
import { Settings, Notifications, Language } from '@material-ui/icons';
import male from '../../assets/images/male-avatar.jpg';

export default function header() {
  return (
    <div className="header-container">
      <div className="logo">
        <span>Dashboard app</span>
      </div>
      <div className="header-icons-container">
        <div className="icon">
          <Notifications />
          <span className="notification-badge">5</span>
        </div>
        <div className="icon">
          <Settings />
        </div>
        <div className="icon">
          <Language />
        </div>
        <img className="header-avatar" alt="" src={male} />
      </div>
    </div>
  );
}
