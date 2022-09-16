let day=prompt('what day of the week?', '');
let hourWork=prompt('what time is it now?', '');
let result;
if (day=='mo' || day=='tu' || day=='we' || day=='th' || day=='fr' || day=='Mo' || day=='Tu' || day=='We' || day=='Th' || day=='Fr' || day=='Mon' || day=='Tue' || day=='Wed' || day=='Thu' || day=='Fri') {
    if (hourWork<=10 || hourWork >=22) {
        result=('office is closed - not work time');
    }
    else {
        result=('office is the open - work time');
    }
}
else {
    result=('office is closed - weekend');
}
console.log('result is:', result);
console.log('input weekday:', day);
console.log('input time:', hourWork);