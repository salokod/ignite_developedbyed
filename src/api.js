//Base URL
const base_url = 'https://api.rawg.io/api/';

//getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`;
    } else { 
        return month;
    }
}

//getting the date
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10) {
        return `0${day}`;
    } else { 
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//current day/month/year

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;


//URL to fetch from
export const popularGamesUrl = () => `${base_url}${popular_games}`;