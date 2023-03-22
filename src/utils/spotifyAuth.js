// src/utils/spotifyAuth.js
const axios = require('axios');
require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const getSpotifyAccessToken = async () => {
  try {
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
      data: 'grant_type=client_credentials',
      responseType: 'json',
    };

    const response = await axios(authOptions)
    if (response.status === 200) {
      return response.data.access_token
    } else {
      throw new Error('Failed to get Spotify access token')
    }
  } catch (error) {
    console.error('Error getting Spotify access token:', error.message)
    throw error
  }
}

module.exports = getSpotifyAccessToken