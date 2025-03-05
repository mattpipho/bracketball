import {PlayerInfoType} from '../../../types/types';


const mapPlayerInfo = (teamId: string, playerInfo: any):PlayerInfoType => {
    return {
        teamId,
        playerId: playerInfo.id,
        firstName: playerInfo.firstName,
        lastName: playerInfo.lastName,
        shortName: playerInfo.shortName,
        displayName: playerInfo.displayName,
    }
}

export const getRoster = async (teamId: string, season: string |undefined = undefined): Promise<PlayerInfoType[]> => {
    try {
        let url = `http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/${teamId}/roster`;
        if(season) url = url + `?season=${season}`;

        const response = await fetch(url);
        if(response.ok) {
            const result = await response.json();

            return result.athletes.map((athlete:any)=> mapPlayerInfo(teamId,athlete));
        }
    } catch (e) {
        console.error(e);
    }
    return [];
}
