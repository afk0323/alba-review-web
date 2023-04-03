import React from 'react';
import { Link } from 'react-router-dom';
import './LoginButton.scss';

type LoginButtonProps = {
  platform: string;
  backgroundColor: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({ platform, backgroundColor }) => {
  return (
    <div className="LoginButton" style={{ backgroundColor }}>
      <Link to="/userjoin">
        <span className="platform">{platform}</span>
      </Link>
    </div>
  );
};

export default LoginButton;
