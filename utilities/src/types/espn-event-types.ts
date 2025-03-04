export interface EventData {
    boxscore: Boxscore;
}
  
  interface Boxscore {
    teams: Team[];
    players: Player[];
  }
  
  interface Team {
    team: TeamDetails;
    statistics: Statistic[];
    displayOrder: number;
    homeAway: "home" | "away";
  }
  
  interface TeamDetails {
    id: string;
    uid: string;
    slug: string;
    location: string;
    name: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    color: string;
    alternateColor: string;
    logo: string;
  }
  
  interface Statistic {
    name: string;
    displayValue: string;
    label: string;
    abbreviation?: string;
  }
  
  interface Player {
    team: TeamDetails;
    statistics: PlayerStatistics[];
  }
  
  interface PlayerStatistics {
    names: string[];
    keys: string[];
    labels: string[];
    descriptions: string[];
    athletes: Athlete[];
  }
  
  interface Athlete {
    active: boolean;
    athlete: AthleteDetails;
    starter: boolean;
    didNotPlay: boolean;
    ejected: boolean;
    stats: string[];
  }
  
  interface AthleteDetails {
    id: string;
    uid: string;
    guid: string;
    displayName: string;
    shortName: string;
    links: Link[];
    headshot: Headshot;
    jersey: string;
    position: Position;
  }
  
  interface Link {
    rel: string[];
    href: string;
    text: string;
  }
  
  interface Headshot {
    href: string;
    alt: string;
  }
  
  interface Position {
    name: string;
    displayName: string;
    abbreviation: string;
  }
  