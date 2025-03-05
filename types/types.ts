export type PlayerPointsType = {
    eventId: string;
    teamId: string;
    playerId: string;
    points: number;
}

export type PlayerInfoType = {
    teamId: string;
    playerId: string;
    firstName: string;
    lastName: string;
    displayName: string;
    shortName: string;
}

export type Athlete = {
    athleteId: string;
    teamId: string;
    year: string;
}

export type AthleteStats = {
    athleteId: string;
    teamId: string;
    eventId: string;
    round: string;
    stats: IndividualStats;
}

export type IndividualStats = {
    points: number;
    rebounds: number;
    assists: number;
    steals: number;
    blocks: number;
}

export type Team = {
    teamId: string;
    name: string;
    abbrev: string;
    seed: number;
    region: string;
}

export type Event = {
    eventId: string;
    competitors: [];
    status: string;
    region: string;
    round: string;
    startTime: string;
}

export type ParticipantRoster = {
    participantId: string;
    athletes: Athlete[];
}

export type Participant = {
    participantId: string;
    firstName: string;
    lastName: string;
    displayName: string;
    shortName: string;
}