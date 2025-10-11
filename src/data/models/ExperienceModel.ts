export class ExperienceModel {
  position: string = ''
  company: string = ''
  startDate: Date | null = new Date()
  endDate?: Date = new Date()
  bulletPoints: {
    value: string
    emphasis?: string[]
  }[] = []

  public constructor(obj: Partial<ExperienceModel>) {
    Object.assign(this, obj)
  }
}

export class BulletPointModel {
  public value: string = ''
  public emphasis?: string[] = []

  constructor(obj: Partial<BulletPointModel>) {
    Object.assign(this, obj)
  }
}
