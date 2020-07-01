const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const AUDIO_URL = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: AUDIO_URL,
      genre: `rock`,
    },
    {
      src: AUDIO_URL,
      genre: `blues`,
    },
    {
      src: AUDIO_URL,
      genre: `blues`,
    },
    {
      src: AUDIO_URL,
      genre: `blues`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Bean`,
      src: AUDIO_URL,
    },
    answers: [{
      artist: `John Snow`,
      picture: `${AVATAR_URL}/A`,
    },
    {
      artist: `Jack Sparrow`,
      picture: `${AVATAR_URL}/AB`,
    },
    {
      artist: `Jeremih Paul`,
      picture: `${AVATAR_URL}/AC`,
    }],
  }
];
