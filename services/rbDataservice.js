const week1 = require('../data/2017_rb_weekly_json/week_1.json');
const week2 = require('../data/2017_rb_weekly_json/week_2.json');
const week3 = require('../data/2017_rb_weekly_json/week_3.json');
const week4 = require('../data/2017_rb_weekly_json/week_4.json');
const week5 = require('../data/2017_rb_weekly_json/week_5.json');
const week6 = require('../data/2017_rb_weekly_json/week_6.json');
const week7 = require('../data/2017_rb_weekly_json/week_7.json');
const week8 = require('../data/2017_rb_weekly_json/week_8.json');
const week9 = require('../data/2017_rb_weekly_json/week_9.json');
const week10 = require('../data/2017_rb_weekly_json/week_10.json');
const week11 = require('../data/2017_rb_weekly_json/week_11.json');
const week12 = require('../data/2017_rb_weekly_json/week_12.json');
const week13 = require('../data/2017_rb_weekly_json/week_13.json');
const week14 = require('../data/2017_rb_weekly_json/week_14.json');
const week15 = require('../data/2017_rb_weekly_json/week_15.json');
const week16 = require('../data/2017_rb_weekly_json/week_16.json');
const week17 = require('../data/2017_rb_weekly_json/week_17.json');
import teamDataService from './teamDataService';

const weeks = {
  week1: week1,
  week2: week2,
  week3: week3,
  week4: week4,
  week5: week5,
  week6: week6,
  week7: week7,
  week8: week8,
  week9: week9,
  week10: week10,
  week11: week11,
  week12: week12,
  week13: week13,
  week14: week14,
  week15: week15,
  week16: week16,
  week17: week17
};

const teamNameConverter = (abrv) => {
  const teams = {
    "ARI": "Arizona Cardinals",
    "ATL": "Atlanta Falcons",
    "BAL": "Baltimore Ravens",
    "BUF": "Buffalo Bills",
    "CAR": "Carolina Panthers",
    "CHI": "Chicago Bears",
    "CIN": "Cincinnati Bengals",
    "CLE": "Cleveland Browns",
    "DAL": "Dallas Cowboys",
    "DEN": "Denver Broncos",
    "DET": "Detroit Lions",
    "GB": "Green Bay Packers",
    "HOU": "Houston Texans",
    "IND": "Indianapolis Colts",
    "JAX": "Jacksonville Jaguars",
    "KC": "Kansas City Chiefs",
    "LAC": "Los Angeles Chargers",
    "LAR": "Los Angeles Rams",
    "MIA": "Miami Dolphins",
    "MIN": "Minnesota Vikings",
    "NE": "New England Patriots",
    "NO": "New Orleans Saints",
    "NYG": "New York Giants",
    "NYJ": "New York Jets",
    "OAK": "Oakland Raiders",
    "PHI": "Philadelphia Eagles",
    "PIT": "Pittsburgh Steelers",
    "SEA": "Seattle Seahawks",
    "SF": "San Francisco 49ers",
    "TB": "Tampa Bay Buccaneers",
    "TEN": "Tennessee Titans",
    "WAS": "Washington Redskins",
  };
  return teams[abrv];
};

module.exports = {
  getRb12AllWeeks: () => {
    let rb12DataArray = [];
    let week = 1;
    for (var key in weeks) {
      const currentWeekRbsObj = weeks[key];
      let counter = 0;
      for (var prop in currentWeekRbsObj) {
        counter++;
        if (counter === 12) {
          // console.log('#12 > ', currentWeekRbsObj[prop]);
          let currentWeeksRb12 = currentWeekRbsObj[prop];
          currentWeeksRb12["week"] = week;
          // ATT - Red Zone opp
            // RZ Opp In20
            currentWeeksRb12["Att - RZ Opp In20"] = (currentWeeksRb12["Att"] - currentWeeksRb12["RZ Opp In20"]);
            // RZ Opp In5
            currentWeeksRb12["Att - RZ Opp In5"] = (currentWeeksRb12["Att"] - currentWeeksRb12["RZ Opp In5"]);
          // RZ Opp total - Specific rz (5, 10)
            // RZ Opp In5
            currentWeeksRb12["RZ Opp In20 - RZ Opp In5"] = (currentWeeksRb12["RZ Opp In20"] - currentWeeksRb12["RZ Opp In5"]);
            // RZ Opp In10
            currentWeeksRb12["RZ Opp In20 - RZ Opp In10"] = (currentWeeksRb12["RZ Opp In20"] - currentWeeksRb12["RZ Opp In10"]);
          // team touches, att, rec
          let teamName = teamNameConverter(currentWeeksRb12["Col Team"]);
          // player touches (att + rec)
          currentWeeksRb12["Touches"] = currentWeeksRb12["Att"] + currentWeeksRb12["Rec"];
          currentWeeksRb12["Touches - RZ Opp In20"] = (currentWeeksRb12["Touches"] - currentWeeksRb12["RZ Opp In20"]);

          // Team total touches
          currentWeeksRb12["Team Touches"] = teamDataService.getTeamAllWeeks(teamName).obj[key]["Touches"];
          // team total touches - player attempts
          currentWeeksRb12["Team Touches - Att"] = (currentWeeksRb12["Team Touches"] - currentWeeksRb12["Att"]);
          currentWeeksRb12["Team Touches - Touches"] = (currentWeeksRb12["Team Touches"] - currentWeeksRb12["Touches"]);
          // add him 
          rb12DataArray.push(currentWeeksRb12);
        }
      }
      week++;
    }
    // console.log('>>> ', rb12DataArray);
    return rb12DataArray;
  },
  getRbAllWeeks: (name) => {
    console.log('name - ', name);
    let rbDataObj = {}
    let rbDataArr = [];
    let counter = 1;
    for (var key in weeks) {
      if (weeks[key][name]) {
        var currentRb = weeks[key][name];
        currentRb["week"] = counter;
        counter++;
        // ATT - Red Zone opp
          // RZ Opp In20
          currentRb["Att - RZ Opp In20"] = (currentRb["Att"] - currentRb["RZ Opp In20"]);
          // RZ Opp In5
          currentRb["Att - RZ Opp In5"] = (currentRb["Att"] - currentRb["RZ Opp In5"]);
        // RZ Opp total - Specific rz (5, 10)
          // RZ Opp In5
          currentRb["RZ Opp In20 - RZ Opp In5"] = (currentRb["RZ Opp In20"] - currentRb["RZ Opp In5"]);
          // RZ Opp In10
          currentRb["RZ Opp In20 - RZ Opp In10"] = (currentRb["RZ Opp In20"] - currentRb["RZ Opp In10"]);
        // team touches, att, rec
        let teamName = teamNameConverter(currentRb["Col Team"]);
        // console.log('----------> ', teamDataService.getTeamAllWeeks(teamName).obj[key]);
        // player touches (att + rec)
        currentRb["Touches"] = currentRb["Att"] + currentRb["Rec"];
        currentRb["Touches - RZ Opp In20"] = (currentRb["Touches"] - currentRb["RZ Opp In20"]);

        // Team total touches
        currentRb["Team Touches"] = teamDataService.getTeamAllWeeks(teamName).obj[key]["Touches"];
        // team total touches - player attempts
        currentRb["Team Touches - Att"] = (currentRb["Team Touches"] - currentRb["Att"]);
        currentRb["Team Touches - Touches"] = (currentRb["Team Touches"] - currentRb["Touches"]);

      }
      rbDataObj[key] = currentRb;
      rbDataArr.push(currentRb);
    }
    return {
      obj: rbDataObj,
      arr: rbDataArr
    }
    // return rbData;
  },
};