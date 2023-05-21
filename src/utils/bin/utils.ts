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
        window.open('https://github.com/seankyer/seankyer.com', '_blank');
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
╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝  ╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝.com 
v${packageJson.version}, a clone of m4tt72's 'terminal' site.

Welcome to my website!

Type 'help' to see list of available commands.
`;
};
