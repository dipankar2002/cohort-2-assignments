/*
  Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
    clock that shows you the current machine time?

    Can you make it so that it updates every second, and shows time in the following formats - 

    - HH:MM::SS (Eg. 13:45:23)

    - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function nonAM_PM() {
  setInterval(async()=> {
    console.clear();
    let d = await new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    console.log('\n');
    console.log(`${hh}:${mm}:${ss}`);
    console.log('\n');
  },1*1000);
}

const formatFnc = (hh) => {
  let obj = {
    h:hh,
    f: 'AM'
  }
  if(obj.h === 12) {
    obj.f = 'PM';
  } else if(obj.h === 13) {
    obj.h = 1;
    obj.f = 'PM';
  } else if(obj.h === 14) {
    obj.h = 2;
    obj.f = 'PM';
  } else if(obj.h === 15) {
    obj.h = 3;
    obj.f = 'PM';
  } else if(obj.h === 16) {
    obj.h = 4;
    obj.f = 'PM';
  } else if(obj.h === 17) {
    obj.h = 5;
    obj.f = 'PM';
  } else if(obj.h === 18) {
    obj.h = 6;
    obj.f = 'PM';
  } else if(obj.h === 19) {
    obj.h = 7;
    obj.f = 'PM';
  } else if(obj.h === 20) {
    obj.h = 8;
    obj.f = 'PM';
  } else if(obj.h === 21) {
    obj.h = 9;
    obj.f = 'PM';
  } else if(obj.h === 22) {
    obj.h = 10;
    obj.f = 'PM';
  } else if(obj.h === 23) {
    obj.h = 11;
    obj.f = 'PM';
  } else if(obj.h === 0) {
    obj.h = 12;
  }
  return obj;
}
function AM_PM() {
  setInterval(async()=> {
    console.clear();
    let d = await new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    
    const obj = await formatFnc(hh);
    console.log('\n');
    console.log(`${hh}:${mm}:${ss} ${obj.f}`);
    console.log('\n');
  },1*1000);
}

// nonAM_PM();
AM_PM();