import { API_ENDPOINT_INFO_MAP } from './API_ENDPOINT_INFO_MAP'

export type UrlPath = 'skill/list' | 'experience/list'

export class API {
  private readonly __baseUrl = `${globalThis.origin}/api/resume/`

  async get<T>(url: UrlPath): Promise<T> {
    return fetch(this.__baseUrl + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = await response.json()

      const parsed = JSON.parse(JSON.stringify(data), this.__dateParser)

      const ctor = API_ENDPOINT_INFO_MAP[url].returnModel
      if (Array.isArray(parsed)) {
        return parsed.map((v) => new ctor(v)) as T
      }

      return new ctor(parsed) as T
    })
  }

  private __dateParser(_: string, value: string) {
    const isDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.exec(value)
    if (isDate) {
      return new Date(value)
    }
    return value
  }
}
