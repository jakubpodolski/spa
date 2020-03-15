let [title, name, surname, street, city, zip, country] = ["dr", "Mateusz", "Kubicki", "Długa 15", "Kraków", "30-781", "Poland"];

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

console.log(title+' '+name+' '+surname+'\n'+'ul '+street+'\n'+zip+' '+city+'\n'+country.toUpperCase());
console.log(`${title} ${name} ${surname}\nul ${street}\n${zip} ${city}\n${country.toUpperCase()}`);