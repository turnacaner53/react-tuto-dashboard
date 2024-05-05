import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

const useFetch = ({ url, options = {} }) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [pending, setPending] = React.useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(`Error: ${err}`);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  options: PropTypes.object,
};

export default useFetch;
