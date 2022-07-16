import React from 'react';
import Notfound from '../../images/notfound.png';
import Actorcard from './Actorcard';
import {FlexGrid} from '../Styled';

function Actorgrid({ data }) {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <Actorcard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : Notfound}
        />
      ))}
    </FlexGrid>
  );
}

export default Actorgrid;
