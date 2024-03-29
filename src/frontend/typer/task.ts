// Enum
export enum avvikstyper {
    ANNET = 'ANNET',
    DUPLIKAT = 'DUPLIKAT',
}

export enum TaskStatus {
    AVVIKSHÅNDTERT = 'AVVIKSHÅNDTERT',
    BEHANDLER = 'BEHANDLER',
    FEILET = 'FEILET',
    FERDIG = 'FERDIG',
    KLAR_TIL_PLUKK = 'KLAR_TIL_PLUKK',
    MANUELL_OPPFØLGING = 'MANUELL_OPPFØLGING',
    PLUKKET = 'PLUKKET',
    UBEHANDLET = 'UBEHANDLET',
    ALLE = 'ALLE',
}

export enum loggType {
    BEHANDLER = 'BEHANDLER',
    FEILET = 'FEILET',
    FERDIG = 'FERDIG',
    KLAR_TIL_PLUKK = 'KLAR_TIL_PLUKK',
    MANUELL_OPPFØLGING = 'MANUELL_OPPFØLGING',
    PLUKKET = 'PLUKKET',
    UBEHANDLET = 'UBEHANDLET',
}

export enum taskTyper {
    hentJournalpostIdFraJoarkTask = 'hentJournalpostIdFraJoarkTask',
    hentSaksnummerFraJoark = 'hentSaksnummerFraJoark',
    iverksettMotOppdrag = 'iverksettMotOppdrag',
    journalførSøknad = 'journalførSøknad',
    mottaFødselshendelse = 'mottaFødselshendelse',
    sendMeldingTilDittNav = 'sendMeldingTilDittNav',
    sendSøknadTilSak = 'sendSøknadTilSak',
    sendTilSak = 'sendTilSak',
    statusFraOppdrag = 'statusFraOppdrag',
}

// Tekster
type ITaskTypeTekster = {
    [key in taskTyper]: string;
};

export const taskTypeTekster: ITaskTypeTekster = {
    hentJournalpostIdFraJoarkTask: 'Hent journalpost id fra joark',
    hentSaksnummerFraJoark: 'Hent saksnummer fra joark',
    iverksettMotOppdrag: 'Iverksett mot oppdrag',
    journalførSøknad: 'Journalfør søknad',
    mottaFødselshendelse: 'Motta fødselshendelse',
    sendMeldingTilDittNav: 'Send melding til ditt NAV',
    sendSøknadTilSak: 'Send søknad til sak',
    sendTilSak: 'Send til sak',
    statusFraOppdrag: 'Hent status fra oppdrag',
};

type ITaskStatusTekster = {
    [key in TaskStatus]: string;
};

export const taskStatusTekster: ITaskStatusTekster = {
    AVVIKSHÅNDTERT: 'Avvikshåndtert',
    BEHANDLER: 'Behandler',
    FEILET: 'Feilet',
    FERDIG: 'Ferdig',
    KLAR_TIL_PLUKK: 'Klar til plukk',
    MANUELL_OPPFØLGING: 'Manuell oppfølging',
    PLUKKET: 'Plukket',
    UBEHANDLET: 'Ubehandlet',
    ALLE: 'Alle',
};

// Interface
export interface ITask {
    avvikstype: avvikstyper;
    callId: string;
    id: number;
    metadata: {
        [key: string]: string;
    };
    opprettetTidspunkt: string;
    payload: string;
    status: TaskStatus;
    triggerTid: string;
    taskStepType: taskTyper;
    antallLogger?: number;
    sistKjørt?: string;
    visLogg?: boolean;
    kommentar?: string;
}

// Muliggjør for fremtidlig pagination
export interface ITaskResponse {
    tasks: ITask[];
}

export interface ITaskLogg {
    endretAv: string;
    melding?: string;
    node: string;
    opprettetTidspunkt: string;
    type: loggType;
}

export interface IAvvikshåndteringDTO {
    taskId: number;
    årsak: string;
    avvikstype: avvikstyper;
}

export interface IKommentarDTO {
    taskId: number;
    settTilManuellOppfølging: boolean;
    kommentar: string;
}

export enum Fagsystem {
    ALLE = 'ALLE',
    BA = 'BA',
    EF = 'EF',
    KONT = 'KONT',
    UKJENT = 'UKJENT',
}

export const stringTilFagsystem: Record<string, Fagsystem> = {
    ALLE: Fagsystem.ALLE,
    BA: Fagsystem.BA,
    EF: Fagsystem.EF,
    KONT: Fagsystem.KONT,
    UKJENT: Fagsystem.UKJENT,
};
