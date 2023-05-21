import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
    const { data } = await axios.get(
        `https://api.github.com/users/${config.social.github}/repos`,
    );

    return data;
};

export const getWeather = async (city: string) => {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

    return data;
};

export const getIP = async () => {
    const { data } = await axios.get('https://api.ipify.org/?format=json');

    return data;
};
