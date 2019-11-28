import React, { useState } from 'react';

import { Container, Row } from './style';

import { requesSongtLyric } from '../../services/lyrics';

function App() {
  const [song, setSong] = useState({});
  const [lyric, setLyric] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSong({
      ...song,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    requesSongtLyric(song)
      .then((res) => {
        setLyric(res.lyrics);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        if ("response" in err) {
          setLyric(err.response.data.error);
        }
      })
  }

  return (
    <Container>
      <Row>
        <h1>Lyrics</h1>
        <h3>Insert the Artist and song name, and press enter to find lyric</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="artist">
            Artist
            <input
              id="artist"
              type="text"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="song">
            Song
            <input
              id="song"
              type="text"
              onChange={handleChange}
              required
            />
          </label>
          <button />
        </form>
        <pre>
          {lyric}
        </pre>
      </Row>
    </Container>
  );
}

export default App;
