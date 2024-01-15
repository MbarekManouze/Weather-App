import {Sun,clear,blizzard,blowingsnow,cloudy,fog,freezingfog,heavyrain,heavysnow,heavy,
    icepellets,lightfreezingrain,lightrainshower,lightrain,lightshowericepellets,lightsnowshower,
    lightsnow,lightdrizzle,lightsleet,mist,MHfreezingrain,MHrainshower,MHrainthunder,MHshowericepellets,
    MHsleetshower,MHsleet,MHsnowshower,MHsnowthunder,Mraintime,Mrain,Msnow,overcast,partlycloudy,pheavysnow,
    plrainthunder,plsnow,pmsnow,PFDP,PLD,PLrain,PrainP,PsleetP,PsnowP,Trainshower,ClearNight,
    CloudySun, Cloud, Temp,Drop, Lsun, LWind, Storm, Rainy  
  } from '../assets'
  

var ModifyPics = (object) => {
    var ConditionPic = null;
  
    ConditionPic = (object.text == "Sunny" ? Sun : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Mist" ? mist : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Clear" ? clear : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Partly cloudy" ? partlycloudy : null);  
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Overcast" ? overcast : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Cloudy" ? cloudy : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy rain possible" ? PrainP : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy snow possible" ? PsnowP : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy sleet possible" ? PsleetP : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy freezing drizzle possible" ? PFDP : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Thundery outbreaks possible" ? Sun : null); //
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Blowing snow" ? blowingsnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Blizzard" ? blizzard : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Fog" ? fog : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Freezing fog" ? freezingfog : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light drizzle" ? PLD : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light drizzle" ? lightdrizzle : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Freezing drizzle" ? Sun : null); //
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Heavy freezing drizzle" ? Sun : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light rain" ? PLrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light rain" ? lightrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate rain at times" ? Mraintime : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate rain" ? Mrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Heavy rain at times" ? heavyrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Heavy rain" ? heavyrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light freezing rain" ? lightfreezingrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy freezing rain" ? MHfreezingrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light sleet" ? lightsleet : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy sleet" ? MHsleet : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light snow" ? plsnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light snow" ? lightsnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy moderate snow" ? pmsnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate snow" ? Msnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy heavy snow" ? pheavysnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Heavy snow" ? heavysnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Ice pellets" ? icepellets : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light rain shower" ? lightrainshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy rain shower" ? MHrainshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Torrential rain shower" ? Trainshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light sleet showers" ? MHsleetshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy sleet showers" ? MHsleetshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light snow showers" ? lightsnowshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy snow showers" ? MHsnowshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light showers of ice pellets" ? lightshowericepellets : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy showers of ice pellets" ? MHshowericepellets : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light rain with thunder" ? plrainthunder : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy rain with thunder" ? MHrainthunder : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light snow with thunder" ? MHsnowthunder : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy snow with thunder" ? MHsnowthunder : null);
    // if (ConditionPic == null) return Sun;

    return (ConditionPic);
}


export default ModifyPics;