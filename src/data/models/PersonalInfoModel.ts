type Language = {
  name: string
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native'
}

export class PersonalInfoModel {
  name: string = 'Mateusz Eiding'
  phone?: string = import.meta.env.VITE_PHONE
  email?: string = import.meta.env.VITE_EMAIL
  location: string = 'Poland, Szczecin'
  languages: Language[] = []

  constructor(obj: Partial<PersonalInfoModel>) {
    Object.assign(this, obj)
  }

  get EmailHref() {
    if (!this.email) return undefined

    return `mailto:${this.email}`
  }

  get PhoneHref() {
    if (!this.phone) return undefined
    const normalized = this.phone?.replaceAll(' ', '').replaceAll('-', '')

    return `tel:${normalized}`
  }
}
