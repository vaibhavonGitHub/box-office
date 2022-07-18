import React from 'react'
import Nav from "./Nav";
import Title from "./Title";

function MainPageLayout({children}) {
  return (
    <div>
        <Title title="The Box-Office" subtitle="Are you searching for Movies or Actors?"/>
        <Nav/>
        {children}
    </div>
  );
}

export default MainPageLayout;