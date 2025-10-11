type Language = {
  name: string
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native'
}

export class PersonalInfoModel {
  public name: string = 'Mateusz Eiding'
  public phone?: string = import.meta.env.VITE_PHONE
  public email?: string = import.meta.env.VITE_EMAIL
  public location: string = 'Poland, Szczecin'
  public languages: Language[] = []

  public constructor(obj: Partial<PersonalInfoModel>) {
    Object.assign(this, obj)
  }
}
