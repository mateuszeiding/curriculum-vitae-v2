import type { UrlPath } from './API'
import { ExperienceModel } from './models/ExperienceModel'
import { SkillGroupModel } from './models/SkillModel'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Ctor<T> = new (...args: any[]) => T

type EndpointInfo = {
  returnModel: Ctor<unknown>
}

export const API_ENDPOINT_INFO_MAP: Record<UrlPath, EndpointInfo> = {
  ['skill/list']: {
    returnModel: SkillGroupModel,
  },
  ['experience/list']: {
    returnModel: ExperienceModel,
  },
}
