import axios from "axios";

const URL = "http://localhost:3001";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);
const responseLogin = await axios.get(`${URL}/login`);
const responseRegister = await axios.get(`${URL}/register`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
export const registerArray = responseSongs.data;
export const loginArray = responseSongs.data;
