
// 1. Exo 1 
//     - Déclarer une variable qui se nomme 'multiplicateur' valant 5
//     - Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.


// let multiplicateur = 5;

// for (let i = 1; i <= 9; i++) {
//   console.log(`${i} x ${multiplicateur} = ${multiplicateur * i}`);
// }



// 2. Exo 2
//     - La même chose sauf qu'on incrémente par deux

// let multiplicateur = 5;


// for (let i = 2; i <= 20; i += 2) {
//     console.log(`${i} x ${multiplicateur} = ${multiplicateur * i}`);
// }


// 3. Exo 3
//    - Faire une boucle décendante pour les nombres pairs de 20 à 0
//         // Ex: 20-18-16, ect.

// for (let i = 20; i >= 0; i -= 2) {
//     console.log(i);
//   }


// 4. Exo 4
//     - Créer un tableau avec les prénoms des gens de la classe
//     - Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'


// let prenoms = ['adil', 'mo', 'Denis', 'bachir', 'oiuytre'];
// let longPrenoms = [];

// for (let i = 0; i < prenoms.length; i++) {
//     if (prenoms[i].length > 5) {
//       longPrenoms.push(prenoms[i]);
//     }
//   }
//   console.log(longPrenoms);

// 5. Exo 5
//     - Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//     - créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes

// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grossesSommes = [];

// for (let i = 0; i < sommes.length; i++) {
//   if (sommes[i] > 60) {
//     grossesSommes.push(sommes[i]);
//     sommes.splice(i, 1);
//     i--;
//   }
// }
// console.log("grossesSommes " + grossesSommes); 
// console.log( "sommes " + sommes); 


// 6. Exo 6
//     - Voici un tableau : 
//     let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
//     - Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     - Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     - Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableaux.

// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// function trierDonnees(donnee) {
//   if (typeof donnee === 'string') {
//     typeString.push(donnee);
//   } else if (typeof donnee === 'number') {
//     typeNumber.push(donnee);
//   } else if (typeof donnee === 'object') {
//     typeObject.push(donnee);
//   } else {
//     typeAutre.push(donnee);
//   }
// }
// donnees.forEach(trierDonnees);
// console.log(donnees); 
// console.log(typeString); 
// console.log(typeNumber); 
// console.log(typeObject); 
// console.log(typeAutre); 

// 7. Exo 7
//    - Créez un tableau avec les prénoms de toute la classe, et mettez leur première lettre en majuscule, la dernière lettre aussi, et le reste en minuscule

// let prenoms = ['adil', 'mo', 'Denis', 'bachir', 'oiuytre'];

// for (let i = 0; i < prenoms.length; i++) {
//   let prenom = prenoms[i];
//   let premierCaractere = prenom.charAt(0).toUpperCase();
//   let dernierCaractere = prenom.charAt(prenom.length - 1).toUpperCase();
//   prenoms[i] = premierCaractere + prenom.substring(1, prenom.length - 1) + dernierCaractere;
// }
// console.log(prenoms);

// 8. Exo 8
//    - Créez une variable avec cette valeur = "Bonjour à tous"
//    - Vous devez faire en sorte d'avoir ce resultat à la fin : BoNjOuR A ToUs

// let bjr = "Bonjour à tous";
// let bjrMaj = "";

// for (let i = 0; i < bjr.length; i++) {
//   if (i % 2 === 0) {
//     bjrMaj += bjr[i].toUpperCase();
//   } else {
//     bjrMaj += bjr[i].toLowerCase();
//   }
// }

// console.log(bjrMaj);


// 9. Exercice de puissance (Si vous le réussissez vous êtes des monstres)

// Voici le tableau :

// let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 1827, 1801, 1208, 1839, 1596, 1925];

//  -  Trouve la combinaison de deux nombres dont le résultat est “2020”.
//  -  Trouve la combinaison de trois nombres dont le résultat est “2020”.

// let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 1827, 1801, 1208, 1839, 1596, 1925];


// for (let i = 0; i < tab.length; i++) {
//     for (let j = i + 1; j < tab.length; j++) {
//       if (tab[i] + tab[j] === 2020) {
//         console.log(`La combinaison de ${tab[i]} et ${tab[j]} est égale à 2020`);
//       }
//     }
//   }

//   for (let i = 0; i < tab.length; i++) {
//     for (let j = i + 1; j < tab.length; j++) {
//       for (let k = j + 1; k < tab.length; k++) {
//         if (tab[i] + tab[j] + tab[k] === 2020) {
//           console.log(`La combinaison de ${tab[i]}, ${tab[j]} et ${tab[k]} est égale à 2020`);
//         }
//       }
//     }
//   }
// 10. Utilisez une boucle for pour avoir ce résultat :






// 11. 
//     - Vous allez créer un tableau avec 10 prénoms

//     - Vous allez créer un tableau avec 10 chiffres d'entre 0 et 20
//     - Vous devez combiner ces deux tableaux :
//      // console.log(`${lepremiereprenom} a eu ${lepremierchiffre}/20 en Math`
// ```


// let prenoms = ['AAAA', 'BBBB', 'CCCC', 'DDDD', 'EEEE', 'FFFF', 'GGG', 'HHHH', 'IIII', 'GGGG'];
// let chiffres = [5, 8, 12, 15, 17, 18, 19, 10, 3, 6];

// for (let i = 0; i < prenoms.length; i++) {
//     console.log(`${prenoms[i]} a eu ${chiffres[i]}/20 en Math`);
//   }
