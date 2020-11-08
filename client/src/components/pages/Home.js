import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </div>
  );
};

export default Home;
