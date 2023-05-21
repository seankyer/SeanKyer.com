import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort().join(', ');

    return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const date = async (args: string[]): Promise<string> => {
    return new Date().toString();
};

export const repo = async (args?: string[]): Promise<string> => {
    setTimeout(function () {
        window.open('https://github.com/m4tt72/terminal', '_blank');
    }, 1000);

    return 'Opening repository...';
};

export const banner = (args?: string[]): string => {
    return `
░██████╗███████╗░█████╗░███╗░░██╗  ██╗░░██╗██╗░░░██╗███████╗██████╗░
██╔════╝██╔════╝██╔══██╗████╗░██║  ██║░██╔╝╚██╗░██╔╝██╔════╝██╔══██╗
╚█████╗░█████╗░░███████║██╔██╗██║  █████═╝░░╚████╔╝░█████╗░░██████╔╝
░╚═══██╗██╔══╝░░██╔══██║██║╚████║  ██╔═██╗░░░╚██╔╝░░██╔══╝░░██╔══██╗
██████╔╝███████╗██║░░██║██║░╚███║  ██║░╚██╗░░░██║░░░███████╗██║░░██║
╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝  ╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝ v${packageJson.version}

Welcome to seankyer.com

Type 'help' to see list of available commands.

--
Forked from m4tt72 'terminal'. Type 'repo' to check out the project.

New 🎉: Try out the new 'theme' command. See all available themes <a href="https://github.com/m4tt72/terminal/tree/master/docs/themes">in the docs</a>.
New 🎉: New command 'neofetch', for you linux.
--
`;
};
