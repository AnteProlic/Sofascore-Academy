import { Card, Goal, Incident, Period } from "./interface";

export const parseTime = (timeStamp: string = "") => {
    if (!timeStamp) {
        return {
            year: "",
            month: "",
            day: "",
            hour: "",
            min: ""
        };
    }
    
    let [date, time] = timeStamp.split("T") ?? ["", ""]
    let [year, month, day] = date.split("-")
    let [hour, min] = time.split(/[:+ ]+/)

    return {year, month, day, hour, min}
}

export function isCard(incident: Incident): incident is Card {
    return 'color' in incident && 'teamSide' in incident;
}

export function isGoal(incident: Incident): incident is Goal {
    return 'homeScore' in incident && 'awayScore' in incident;
}

export function isPeriod(incident: Incident): incident is Period {
    return 'text' in incident && !isCard(incident) && !isGoal(incident);
}
