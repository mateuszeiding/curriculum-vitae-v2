import { http, HttpResponse, type HttpResponseInit, delay } from 'msw'
import { getExperience } from './data/getExperience.mock'
import { getSkills } from './data/getSkills.mock'

const delayResponse = () => delay(500)

const getJsonInit: HttpResponseInit = {
  headers: {
    'Content-Type': 'application/json',
  },
  status: 200,
}

export const handlers = [
  http.get('/api/resume/skill/list', async () => {
    await delayResponse()
    return HttpResponse.json(getSkills, getJsonInit)
  }),
  http.get('/api/resume/experience/list', async () => {
    await delayResponse()
    return HttpResponse.json(getExperience, getJsonInit)
  }),
]
