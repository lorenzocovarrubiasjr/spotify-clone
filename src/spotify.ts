export const auth = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/".replaceAll("/", "%2F");
const clientId = "064a037e2450406da4597090da4e191b";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export interface SpotifyAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
}

export const loginUrl = `${auth}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUri = (): SpotifyAuthResponse => {
  const hashArray = window.location.hash.substring(1).split(/[&=]/);
  return {
    access_token: hashArray[1],
    token_type: hashArray[3],
    expires_in: hashArray[5],
  };
};
