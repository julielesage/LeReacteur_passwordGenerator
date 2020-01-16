const passwordGen = num => {
  let password = "";
  let alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZazertyuiopqsdfghjklmwxcvbn0123456789";

  if (num > 15 && num < 6) return "ERROR";
  for (let i = 0; i < num; i++) {
    password += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    /* La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
    Math.random : Un nombre flottant pseudo-aléatoire, généré entre 0 (inclus) et 1 (exclu)*/
  }
  return password;
};
console.log(passwordGen(8)); // Df1jUNaQ
console.log(passwordGen(8)); // digVQ4zy
