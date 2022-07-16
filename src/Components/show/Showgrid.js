import React from 'react';
import Notfound from '../../images/notfound.png';
import Showcard from './Showcard';
import {FlexGrid} from '../Styled';

function Showgrid({ data }) {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <Showcard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : Notfound}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
}

export default Showgrid;
