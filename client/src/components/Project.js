import React from 'react';
import { useParams } from 'react-router-dom';

// Path regex matching example
const Project = (props) => {
  const params = useParams();

  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <p>Project Path ID: {params.id}</p>
    </React.Fragment>
  );
};

export default Project;
