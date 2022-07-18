import React from 'react'
import Nav from "./Nav";
import Title from "./Title";

function MainPageLayout({children}) {
  return (
    <div>
        <Title title="Box-Office" subtitle="Search for Movies or Actors"/>
        <Nav/>
        {children}
    </div>
  );
}

export default MainPageLayout;