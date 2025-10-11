export class SkillModel {
  name: string = ''
  list: string[] = []
  icon?: string
  level?: 0 | 1 | 2 | 3 = 0

  constructor(obj: Partial<SkillModel>) {
    Object.assign(this, obj)
  }
}

export class SkillGroupModel {
  name: string = ''
  skills: SkillModel[] = []

  constructor(obj: Partial<SkillGroupModel>) {
    Object.assign(this, obj)
  }
}
