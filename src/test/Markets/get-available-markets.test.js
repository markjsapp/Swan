const getSpotifyAccessToken = require('../../utils/spotifyAuth') 
const API_BASE_URL = 'https://api.spotify.com' 
const supertest = require('supertest') 
const request = supertest(API_BASE_URL) 
const { expect } = require('chai') 

describe('Get Available Markets ', () => {
  const path = '/v1/markets' 

  describe('Get the list of markets where Spotify is available', () => {
    describe('authenticated', () => {
      let TEST_ACCESS_TOKEN 

      before(async () => {
          TEST_ACCESS_TOKEN = await getSpotifyAccessToken() 
      }) 

      it('should return a list of available markets', async () => {
        const response = await request.get(path).set('Authorization', `Bearer ${TEST_ACCESS_TOKEN}`) 

        expect(response.status).to.equal(200) 
        expect(response.req.path).to.equal(path) 
        expect(response.body).to.have.property('markets') 
        expect(response.body.markets).to.be.an('array').that.is.not.empty 
        expect(response.headers['content-type']).to.contain('application/json') 
        expect(response.body.markets).to.contain('US') 
      })
    }) 

    describe('unauthenticated', () => {
      const INVALID_ACCESS_TOKEN = 'invalid_access_token' 

      it('should return a 401 Unauthorized error with an invalid access token', async () => {
        const response = await request.get(path).set('Authorization', `Bearer ${INVALID_ACCESS_TOKEN}`) 

        expect(response.status).to.equal(401) 
        expect(response.body).to.be.an('object') 
        expect(response.body).to.have.property('error') 
        expect(response.body.error).to.have.property('status', 401) 
        expect(response.body.error).to.have.property('message', 'Invalid access token') 
      }) 
    }) 
  }) 
}) 