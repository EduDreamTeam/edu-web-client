export class RegistrationModel {
    public firstName: string;
    public lastName: string;
    public email: string;
    public login: string;
    public password: string;

    constructor(obj?: Partial<RegistrationModel>) {
        this.firstName = obj && obj.firstName || "";
        this.lastName = obj && obj.lastName || "";
        this.email = obj && obj.email || "";
        this.login = obj && obj.login || "";
        this.password = obj && obj.password || "";
    }
}
