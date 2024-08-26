export type NCAASeasonType = {
    id: string;
    type: number;
    name: string;
    abbreviation: string;
  };
  
  export type NCAASeason = {
    year: number;
    startDate: string;
    endDate: string;
    displayName: string;
    type: NCAASeasonType;
  };
  
  export type NCALogo = {
    href: string;
    width: number;
    height: number;
    alt: string;
    rel: string[];
    lastUpdated: string;
  };
  
  export type NCAACompetitorStatistics = {
    name: string;
    abbreviation: string;
    displayValue: string;
  };
  
  export type NCAACompetitorLeadersAthlete = {
    id: string;
    fullName: string;
    displayName: string;
    shortName: string;
    links: { rel: string[]; href: string }[];
    headshot: string;
    jersey: string;
    position: { abbreviation: string };
    team: { id: string };
    active: boolean;
  };
  
  export type NCAACompetitorLeaders = {
    name: string;
    displayName: string;
    shortDisplayName: string;
    abbreviation: string;
    leaders: {
      displayValue: string;
      value: number;
      athlete: NCAACompetitorLeadersAthlete;
      team: { id: string };
    }[];
  };
  
  export type NCAACompetitorRecord = {
    name: string;
    abbreviation: string;
    type: string;
    summary: string;
  };

  export type NCAATeam = {
    id: string;
    uid: string;
    location: string;
    name: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    color: string;
    alternateColor: string;
    isActive: boolean;
    venue: { id: string };
    links: { rel: string[]; href: string; text: string; isExternal: boolean; isPremium: boolean }[];
    logo: string;
    conferenceId: string;
  }
  
  export type NCAACompetitor = {
    id: string;
    uid: string;
    type: string;
    order: number;
    homeAway: string;
    winner: boolean;
    team: NCAATeam;
    score: string;
    linescores: { value: number }[];
    statistics: NCAACompetitorStatistics[];
    leaders: NCAACompetitorLeaders[];
    curatedRank: { current: number };
    records: NCAACompetitorRecord[];
  };
  
  export type NCAAVenue = {
    id: string;
    fullName: string;
    address: { city: string; state: string };
    indoor: boolean;
  };
  
  export type NCAACompetition = {
    id: string;   
    uid: string;
    date: string;
    attendance: number;
    type: { id: string; abbreviation: string };
    timeValid: boolean;
    neutralSite: boolean;
    conferenceCompetition: boolean;
    playByPlayAvailable: boolean;
    recent: boolean;
    venue: NCAAVenue;
    competitors: NCAACompetitor[];
  };
  
  export type NCAAEvent = {
    id: string;
    uid: string;
    date: string;
    name: string;
    shortName: string;
    season: { year: number; type: number; slug: string };
    competitions: NCAACompetition[];
  };
  
  export type NCAALeague = {
    id: string;
    uid: string;
    name: string;
    abbreviation: string;
    midsizeName: string;
    slug: string;
    season: NCAASeason;
    logos: NCALogo[];
    calendarType: string;
    calendarIsWhitelist: boolean;
    calendarStartDate: string;
    calendarEndDate: string;
    calendar: string[];
  };
  
  export type NCAAData = {
    leagues: NCAALeague[];
    groups: string[];
    events: NCAAEvent[];
  };