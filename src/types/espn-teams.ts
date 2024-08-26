export type TeamsResponse = {
    sports: Sport[];
}

export type Sport = {
    id: string;
    uid: string;
    name: string;
    slug: string;
    leagues: League[];
}

export type League = {
    teams: Team[];
}

export type Team = {
    team: {
        id: string;
        slug: string;
        abbreviation: string;
        displayName: string;
        shortDisplayName: string;
        name: string;
        nickname: string;
        location: string;
        color: string;
        alternateColor: string;
        logos: Logo[];
    }
}

export type Logo = {
    href: string;
    alt: string;
    rel: string[];
    width: number;
    height: number;
}