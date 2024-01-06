import { CloudySun, Cloud, Sun, Temp,Drop, Lsun, LWind, Storm, Rainy} from "../assets";

export const Todaylist = [
    {
        time: "6:00 AM",
        logo: Cloud,
        Temp: "25°",
    },
    {
        time: "9:00 AM",
        logo: CloudySun,
        Temp: "28°",
    },
    {
        time: "12:00 AM",
        logo: Sun,
        Temp: "33°",
    },
    {
        time: "3:00 PM",
        logo: Sun,
        Temp: "34°",
    },
    {
        time: "6:00 PM",
        logo: Sun,
        Temp: "32°",
    },
    {
        time: "9:00 PM",
        logo: CloudySun,
        Temp: "30°",
    },
];

export const AirCondition = [
    {
        desc: "Real feel",
        img: Temp,
        attribute: '30°',
    },
    {
        desc: "Wind",
        img: LWind,
        attribute: "0.2km/h",
    },
    {
        desc: "Chance of rain",
        img: Drop,
        attribute: "0%",
    },
    {
        desc: "UV Index",
        img: Lsun,
        attribute: "3",
    },
];

export const SevenDays = [
    {
        Day: "Today",
        img: Sun,
        description: "Sunny",
        High: '37',
        Low: '21',
    },
    {
        Day: "Tue",
        img: Sun,
        description: "Sunny",
        High: '37',
        Low: '21',
    },
    {
        Day: "Wed",
        img: Sun,
        description: "Sunny",
        High: '37',
        Low: '21',
    },
    {
        Day: "Thu",
        img: Cloud,
        description: "Cloudy",
        High: '37',
        Low: '21',
    },
    {
        Day: "Fri",
        img: Cloud,
        description: "Cloudy",
        High: '37',
        Low: '21',
    },
    {
        Day: "Sat",
        img: Rainy,
        description: "Rainy",
        High: '37',
        Low: '21',
    },
    {
        Day: "Sun",
        img: Storm,
        description: "Storm",
        High: '37',
        Low: '21',
    },
];
