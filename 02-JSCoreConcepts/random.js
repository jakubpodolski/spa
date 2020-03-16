let random = (a,b) => [...Array(10)].map(() => ~~(Math.random() * (b - a) + a))
console.log(random(5,20))