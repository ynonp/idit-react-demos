import { useState, useEffect } from 'react';

import $ from 'jquery';

export function useRemoteData(endpoint) {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});

  useEffect(function() {
    setData({});
    const req = $.getJSON(`https://swapi.co/api/${endpoint}/${id}/`, function(data) {
      setData(data);
    });
    return function cancel() {
      req.abort();
    }

  }, [id]);

  return [id, setId, data];
}


