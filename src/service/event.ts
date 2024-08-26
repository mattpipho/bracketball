import { PlayerPointsType } from "../types/types";
import {EventData} from '../types/espn-event-types';


export const getBasketballEvent = async (eventId: string): Promise<EventData|undefined> => {
    try {
        const response = await fetch(`http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary?event=${eventId}`);
        if(response.ok) {
            const result = await response.json() as EventData;

            return result;
        }
    } catch (e) {
        console.error(e);
    }
}

export const getPoints = (eventId: string, event: EventData): PlayerPointsType[] => {

    let playersPoints = [] as PlayerPointsType[];

    event.boxscore.players.forEach(team=>{
        team.statistics.forEach(statistic=> {
            const pointsIndex = statistic.keys.indexOf('points');
            statistic.athletes.forEach(athlete=>{
                const singlePlayer:PlayerPointsType = {
                    eventId: eventId,
                    teamId: team.team.id,
                    playerId: athlete.athlete.id,
                    points: formatPoints(athlete.stats[pointsIndex])
                }

                playersPoints.push(singlePlayer);
            })
        })
    })

    return playersPoints
}