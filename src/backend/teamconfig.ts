import dotenv from 'dotenv';

dotenv.config();
export type Team = 'teamfamilie' | 'tilleggsstonader' | 'helved';

interface Teamconfig {
    host: string;
    team: Team;
}

const config: { [key in Team]: Teamconfig } = {
    teamfamilie: { team: 'teamfamilie', host: 'familie-prosessering' },
    helved: { team: 'helved', host: 'utsjekk-prosessering' },
    tilleggsstonader: { team: 'tilleggsstonader', host: 'tilleggsstonader-prosessering' },
};

const getTeamconfig = (): Teamconfig => {
    const team = process.env.NAIS_NAMESPACE as Team;
    switch (team) {
        case 'teamfamilie':
        case 'helved':
        case 'tilleggsstonader':
            return config[team];
        default:
            throw Error(`Har ikke config for team=${team}`);
    }
};

export const teamconfig = getTeamconfig();
