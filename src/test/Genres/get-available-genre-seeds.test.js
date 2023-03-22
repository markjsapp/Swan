const getSpotifyAccessToken = require('../../utils/spotifyAuth')
const API_BASE_URL = 'https://api.spotify.com'
const supertest = require('supertest')
const request = supertest(API_BASE_URL)
const { expect } = require('chai')

describe('Get Available Genre Seeds ', () => {
  describe('Retrieve a list of available genres seed parameter values for recommendations', () => {
    const path = '/v1/recommendations/available-genre-seeds'

    before(async () => {
        TEST_ACCESS_TOKEN = await getSpotifyAccessToken()
    })

    it('should return a list of available genre seeds', async () => {
      const response = await request.get(path).set('Authorization', `Bearer ${TEST_ACCESS_TOKEN}`)

      expect(response.status).to.equal(200)
      expect(response.req.path).to.equal(path)
      expect(response.body).to.have.property('genres')
      expect(response.body.genres).to.be.an('array')
      expect(response.headers['content-type']).to.contain('application/json')
      expect(response.body.genres).to.contain('acoustic', 'afrobeat', 'alt-rock')
    })
  })
})
