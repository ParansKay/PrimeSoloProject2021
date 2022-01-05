import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
      <h2 style={{'margin':'60px','padding-top':'40px','font-family':'Poiret One', 'font-size':'30px'}}>About</h2>
      </div>
    </div>
  );
}

export default AboutPage;
