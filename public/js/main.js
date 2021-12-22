////////////----------------------------------------------Introduction---------------------------------------/////////////
//*EXO1
let tab = []
console.log(tab);
console.log(typeof(tab));

//*EXO2
let tableau = ["bébé", 13, false, []]
console.log(tableau[0]);
console.log(tableau[1]);
console.log(tableau[2]);
console.log(tableau[3]);

//*EXO3.1
let cinq = ["bonjour", "je", "suis", "Nyange", "Alixe"]
console.log(cinq[2]);

//*EXO3.2
console.log(cinq[0], cinq[cinq.length-1]);

//*EXO3.3
console.log(cinq[1].slice(0, cinq[1].length-1).toUpperCase()+ cinq[1].charAt(cinq[1].length-1));

//*EXO3.4
console.log(cinq[3].charAt(cinq[3][0]));

//*EXO3.5
console.log(cinq[4].slice(1, cinq[4].length));

//*EXO3.6
console.log(cinq[0].charAt(0).toLowerCase() + cinq[0].charAt(1).toUpperCase());

//*EXO3.7
console.log(cinq[0]+cinq[2]);

////////////----------------------------------------------Méthodes---------------------------------------/////////////
//*EXO4
let prenom = []
prenom.push("Marouane")
prenom.push("Ismail")
prenom.push("Hédi")
prenom.push("Cactus")
prenom.push("Alixe")
console.log(prenom);

//*EXO5
let surname = ['Marouane', 'Ismail', 'Hédi', 'Cactus', 'Alixe']
surname.unshift("Maxence")
surname.push("Louise")
console.log(surname);

//*EXO6
let name = ['Marouane', 'Ismail', 'Hédi', 'Cactus', 'Alixe']
name.shift()
console.log(name);

//*EXO7
let surnom = ['Marouane', 'Ismail', 'Hédi', 'Cactus', 'Alixe']
surnom.shift()
surnom.shift()
surnom.pop()
surnom.pop()
console.log(surnom);

//*EXO8
let voornaam = ['Marouane', 'Ismail', 'Hédi', 'Cactus', 'Alixe']
voornaam.splice(1, 1, "Ayhan")
console.log(voornaam);

//*EXO9
let nombre = ["Ayoub", "Jamila", "Alex", "Natchez", "Bene"]
nombre.splice(0, 2,"Adame", "Zulma")
console.log(nombre);

//*EXO10
let naam= ["Ayoub", "Jamila", "Alex", "Natchez", "Bene"]
naam.splice(3, 2)
console.log(naam);
console.log("-------------------------------------------------------------------------------------------------------------------------------------");
//*EXO11
let classe = []
console.log("La classe est vide");
let nickname = ["Stephanie","Robert", "Julie", "Bertrand", "Xhisilda", "Anouck", "Audrey", "Taylor", "Jordan", "Jackie"]
for (let i = 0; classe.length < 10; i++) {
    for (let i = 0; i < nickname.length; i++) {
        classe.push(nickname[i])
        console.log(`${nickname[i]} est maintenant dans la classe`);
    }
}
console.log(classe);
console.log("-------------------------------------------------------------------------------------------------------------------------------------");

//*EXO12
let autreClass = ["Ayoub", "Jamila", "Alex", "Natchez", "Bene"]
let firstClass = ["Stephanie","Robert", "Julie", "Bertrand", "Xhisilda", "Anouck", "Audrey", "Taylor", "Jordan", "Jackie"]
firstClass.push("Viktor")
firstClass.push("Jinx")
console.log(firstClass);
console.log("Il y'a 2 personnes en trop");
let index1 = Math.floor(Math.random()*11)
let index2 = Math.floor(Math.random()*10)
let eleve = firstClass.splice(index1, 1)
let eleve2 = firstClass.splice(index2, 1)
console.log(firstClass);
console.log(`Les élèves ${eleve} et ${eleve2} étaient les intrus. Il y'a maintenant ${firstClass.length} élèves dans la "firstClass"`);
autreClass.push(eleve[0], eleve2[0])
console.log(autreClass);
console.log(`${eleve} et ${eleve2} sont bien dans leur classe. Il y'a maintenant ${firstClass.length} élèves dans "l'autreClass"`);


