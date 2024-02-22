import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const Detail = (props) => {
  const { location } = props;
  const history = useHistory();

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, [location.state, history]);

  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
};

export default Detail;