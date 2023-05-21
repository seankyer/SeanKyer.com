import { getIP } from '../../api';

export const ip = async (args: string[]): Promise<string> => {
    const guestIp = await getIP();
    const message =
        'IPv4 Address .  .  .  .  .  .  .  .  .  .  .  . : ' + guestIp['ip'];

    return message;
};
