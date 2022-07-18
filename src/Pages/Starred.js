import React, { useEffect, useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import Showgrid from '../Components/show/Showgrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/Custom-Hooks';

function Starred() {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));
      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading && <div>Hang on, your Shows are Loading.....</div>}
      {error && <div>An Error Occured: {error}</div>}
      {!isLoading && !shows && <div>You have not added any shows yet.</div>}
      {!isLoading && !error && shows && <Showgrid data={shows} />}
    </MainPageLayout>
  );
}

export default Starred;
