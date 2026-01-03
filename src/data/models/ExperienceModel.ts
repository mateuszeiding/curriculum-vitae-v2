import { BulletPointModel } from './BulletPointModel'

export class ExperienceModel {
  project: string = ''
  description: string = ''
  bulletPoints: BulletPointModel[] = []
  techStack: TechStack[] = []

  constructor(obj: Partial<ExperienceModel>) {
    Object.assign(this, obj)

    if (obj.bulletPoints) {
      this.bulletPoints = obj.bulletPoints?.map((bp) => new BulletPointModel(bp))
    }
  }
}

type TechStack = '.NET' | 'React' | 'Vue' | 'Angular' | 'WebComponents'
