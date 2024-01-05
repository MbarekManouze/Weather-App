import { CloudySun, Cloud, Sun, Temp,Drop, Lsun, LWind, } from "../assets";

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