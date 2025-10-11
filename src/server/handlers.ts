import { http, HttpResponse, type HttpResponseInit, delay } from 'msw'
// import { getCertificates } from './data/getCertificates.mock'
// import { getEducation } from './data/getEducation.mock'
import { getExperience } from './data/getExperience.mock'
import { getSkills } from './data/getSkills.mock'

const delayResponse = () => delay(Math.floor(Math.random() * (1500 - 500 + 1)) + 500)

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
  // http.get('/api/resume/certificate/list', async () => {
  //   await delayResponse()
  //   return HttpResponse.json(getCertificates, getJsonInit)
  // }),
  // http.get('/api/resume/education/list', async () => {
  //   await delayResponse()
  //   return HttpResponse.json(getEducation, getJsonInit)
  // }),
  http.get('/api/resume/experience/list', async () => {
    await delayResponse()
    return HttpResponse.json(getExperience, getJsonInit)
  }),
]
