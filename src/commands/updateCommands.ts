import { Command } from '../commandManager';
import { UpdateChecker } from '../UpdateChecker';

export class CheckForUpdatesCommand implements Command {
    public readonly id = 'com-appalachia-vscode-extension-manager.checkForUpdates';

    public constructor(private readonly updateChecker: UpdateChecker) {}

    public async execute(): Promise<void> {
        await this.updateChecker.checkForUpdates();
    }
}

export class UpdateAllExtensionsCommand implements Command {
    public readonly id = 'com-appalachia-vscode-extension-manager.updateAllExtensions';

    public constructor(private readonly updateChecker: UpdateChecker) {}

    public async execute(): Promise<void> {
        await this.updateChecker.updateAll();
    }
}
