import React from 'react';
import './styles.scss';

const Loader = props => {
  return (
  
    <div className="loading">
    <div className="text-center middle">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
</div>
  );
}

export default Loader;