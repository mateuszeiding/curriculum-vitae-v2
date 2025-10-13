export class ExperienceModel {
  project: string = ''
  description: string = ''
  bulletPoints: BulletPointModel[] = []
  techStack: TechStack[] = []

  public constructor(obj: Partial<ExperienceModel>) {
    Object.assign(this, obj)
  }
}

type TechStack = '.NET' | 'React' | 'Vue' | 'Angular' | 'WebComponents'

export class BulletPointModel {
  public value: string = ''
  public emphasis?: string[] = []

  constructor(obj: Partial<BulletPointModel>) {
    Object.assign(this, obj)
  }
}
