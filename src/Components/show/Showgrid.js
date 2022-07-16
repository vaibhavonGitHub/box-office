import React from 'react';
import Notfound from '../../images/notfound.png';
import Showcard from './Showcard';

function Showgrid({ data }) {
  return (
    <div>
      {data.map(({ show }) => (
        <Showcard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : Notfound}
          summary={show.summary}
        />
      ))}
    </div>
  );
}

export default Showgrid;
