export class SkillModel {
  name: string = ''
  list: string[] = []
  icon?: string
  level?: 0 | 1 | 2 | 3 = 0
  link?: string

  constructor(obj: Partial<SkillModel>) {
    Object.assign(this, obj)
  }
}

export interface ISkillGroupModel {
  name: string
  skills: SkillModel[]
}

export class SkillGroupModel implements ISkillGroupModel {
  name: string = ''
  skills: SkillModel[] = []

  constructor(obj: Partial<SkillGroupModel>) {
    Object.assign(this, obj)
  }

  get SkillsAsc() {
    return this.skills.sort((a, b) => (a.name > b.name ? 1 : -1))
  }
}
