export class UserModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(obj?: Partial<UserModel>) {
    this.id = obj && obj.id || undefined;
    this.firstName = obj && obj.firstName || "";
    this.lastName = obj && obj.lastName || "";
    this.email = obj && obj.email || "";
  }
}
