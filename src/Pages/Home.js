import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import { apiGet } from '../misc/config';
import Showgrid from "../Components/show/Showgrid";
import Actorgrid from "../Components/actors/Actorgrid";

function Home() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowSearch = searchOption === 'shows';

  const onInput = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>no results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <Showgrid data={results} />
      ) : (
        <Actorgrid data={results} />
      );
    }

    return null;
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something...."
        onChange={onInput}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="show-search">
          Shows
          <input
            id="show-search"
            type="radio"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actor-search">
          Actors
          <input
            id="actor-search"
            type="radio"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
