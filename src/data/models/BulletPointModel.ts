export class BulletPointModel {
  value: string = ''
  emphasis?: string[] = []

  constructor(obj: Partial<BulletPointModel>) {
    Object.assign(this, obj)
  }
}
