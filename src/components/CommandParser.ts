export class CommandParser {
    static parseCommand(content: string): [string, string[]] {
        const commandBody = content.substr(1);
        const args = commandBody.split(' ');
        const command = args.shift()!.toLowerCase();

        return [command, args];
    }
}