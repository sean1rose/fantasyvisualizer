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
}

module.exports = {
  getRbAllWeeks: (name) => {
    console.log('name - ', name);
    let rbDataObj = {}
    let rbDataArr = [];
    let counter = 1;
    for (var key in weeks) {
      if (weeks[key][name]) {
        weeks[key][name]["week"] = counter;
        counter++;      
      }
      rbDataObj[key] = weeks[key][name];
      rbDataArr.push(weeks[key][name]);
    }
    return {
      obj: rbDataObj,
      arr: rbDataArr
    }
    // return rbData;
  }
};