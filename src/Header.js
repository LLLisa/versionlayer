import React, { useEffect } from 'react';

const Header = () => {
  //kicks to gate on refresh pog
  useEffect(() => {
    window.localStorage.removeItem('view');
  });
  return <div>HeaderHeaderHeader</div>;
};

export default Header;
