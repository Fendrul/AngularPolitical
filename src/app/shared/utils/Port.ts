export class Port {
    private static readonly port = 8080;

    static getPort(): number {
        return Port.port;
    }
}
