import { envVar } from '@navikt/familie-backend';
import dotenv from 'dotenv';

dotenv.config();

export type Team = 'teamfamilie' | 'tilleggsstonader' | 'teamdagpenger';

interface Teamconfig {
    host: string;
    team: Team;
}

const config: { [key in Team]: Teamconfig } = {
    teamfamilie: { team: 'teamfamilie', host: 'familie-prosessering' },
    teamdagpenger: { team: 'teamdagpenger', host: 'dp-prosessering' },
    tilleggsstonader: { team: 'tilleggsstonader', host: 'tilleggsstonader-prosessering}' },
};

const team = envVar('NAIS_NAMESPACE') as Team;

const getTeamconfig = (): Teamconfig => {
    switch (team) {
        case 'teamfamilie':
        case 'teamdagpenger':
        case 'tilleggsstonader':
            return config[team];
        default:
            throw Error(`Har ikke config for team=${team}`);
    }
};

export const teamconfig = getTeamconfig();
