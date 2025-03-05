# March Madness Utilities

### Important API Calls
- List of Tournament Games
    - http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?dates=2024&groups=100
    - Group 100 was for NCAA Tournament Games
- Event Details
    - http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary?event=401638580


### Get List of Teams in the Tournement

#### Before Draft
- Get list of all individuals participating in the tournament
- Create Team table for all participants
- Once Field is set get all players in the tournament
    - Get Teams in tournament
    - Get Players for each team


#### Enter the Draft Results
- Assign athletes to teams

#### During game play
- Get List of active events
- Pull live data from each event

#### Participant Display
- Standings Page
    - Team Name
    - Total Points
    - Points By Round
    - Players Still In Tournament
- Team Breakdown
    - Points by Player by Game


## Data Model
- Participants
- League
- Teams
- Scoreboard
- Events
- Athletes


## Firestore Data Model
- Event
    - Event Info
    - Box Scores

## SQL Statements
```
select pointsTable.playerId, a.displayName, a.teamId, ct.shortDisplayName, totalPoints, games 
from (select playerid, sum(points) as totalPoints, count(points) as games 
		from athlete_points group by playerId) as pointsTable left join 
        athletes as a on pointsTable.playerId = a.playerId left join
        college_teams as ct on a.teamId = ct.id
order by totalPoints desc;
```




