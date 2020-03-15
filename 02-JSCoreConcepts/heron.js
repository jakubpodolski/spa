// boki trójkąta
let a = 3;
let b = 4;
let c = 5;
let h = 7;

let p = 0.5*(a+b+c);

let f = () => {
  return Math.sqrt(p * (p-a) * (p-b) * (p-c))
};



// Pole trókąta o bokach ..., ... oraz ... wynosi ... .


console.log( `Pole trókąta o bokach ${a}, ${b}, ${c} wynosi ${f()} .`  );