import React, { useState } from 'react';

import { Container, Row } from './style';

function App() {
  const [song, setSong] = useState({});

  const handleChange = (e) => {
    setSong({
      ...song,
      [e.target.id]: e.target.value
    })
  }

  return (
    <Container>
      <Row>
        <h1>Lyrics</h1>
        <h3>Insert the Artist and song name, and press enter to find lyric</h3>
        <form>
          <label htmlFor="artist">
            Artist
            <input id="artist" type="text" onChange={handleChange}/>
          </label>
          <label htmlFor="song">
            Song
            <input id="song" type="text" onChange={handleChange}/>
          </label>
        </form>
      </Row>
    </Container>
  );
}

export default App;
