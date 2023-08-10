// 6kyu, 7kyu, 8kyu
// KATA 1 6kyu
// https://www.codewars.com/kata/57f6051c3ff02f3b7300008b/train/javascript
function meeting(x, need) {
  let borrow = [];
  if (!need) return 'Game On';
  for (let [ used, chairs ] of x) {
    chairs = Math.min(need, Math.max(0, chairs - used.length));
    borrow.push(chairs);
    need -= chairs;
    if (!need)
      return borrow;
  }
  return 'Not enough!';
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]]));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]]));

// KATA 2 8kyu
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
const points = games => {
  let result = games.map(el => { 
    let x = Number(el[0]);
    let y = Number(el[2]);
    if (x > y) { return 3 }
    else if (x < y) { return 0 }
    else { return 1 }
  });
  return result.reduce((ttl, cv) => ttl + cv, 0);
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); 
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])); 

// KATA 3 7kyu
// https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript
// '-' between each 2 odd digits in num
const insertDash = num => num.toString().replace(/[13579](?=[13579])/g,"$&-" );

console.log(insertDash(454793));
console.log(insertDash(1003567));

// KATA 4 7kyu
// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
const divCon = x => {
  const string = [];
  const num = [];
  x.forEach(el => {
    if (typeof el === 'string') {
      string.push(Number(el));
    } else { 
      num.push(el);
    }
  });
  return num.reduce((ttl,cv) => ttl + cv, 0) - string.reduce((ttl,cv) => ttl + cv, 0);
}

console.log(divCon([9, 3, '7', '3']));
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// KATA 5 6kyu
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
const high = s => {
  let arr = s.split(' ').map(word => [...word].reduce((a,b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[arr.indexOf(Math.max(...arr))];
}

console.log(high('man i need a taxi up to ubud'));
console.log(high('take me to semynak'));
