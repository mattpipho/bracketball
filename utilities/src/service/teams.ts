
import { TeamsResponse, Team } from "../types/espn-teams";


export const getTeams = async (): Promise<Team[]> => {
    try {
        let url = `http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams?limit=500`;

        const response = await fetch(url);
        if(response.ok) {
            const result = await response.json() as TeamsResponse;

            return result.sports[0].leagues[0].teams;
        }
    } catch (e) {
        console.error(e);
    }
    return [];
}
