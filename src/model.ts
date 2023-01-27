export class Repository {
    url: string;
    cuenta: string;

    constructor({ url, cuenta }: Repository) {
        this.cuenta = cuenta;
        this.url = url;
    }
}
