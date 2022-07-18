import React from 'react';
import Notfound from '../../images/notfound.png';
import Showcard from './Showcard';
import { FlexGrid } from '../Styled';
import { useShows } from '../../misc/Custom-Hooks';

function Showgrid({ data }) {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id });
          }
        };

        return (
          <Showcard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : Notfound}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
}

export default Showgrid;
