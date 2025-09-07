//Importo i dati dei fighters e delle armi
import { fighters } from "./dataFighters.js"
import { weapons } from "./dataWeapons.js"

////////////////////////////////////////////////
//log di debug
// console.log(fighters)
// console.log(weapons)
////////////////////////////////////////////////




//### Fase 1 - 🔥 Scelta dell'Arma
// Ogni combattente sceglierà casualmente un'arma dalla lista disponibile. 
// ⚠️ Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.
function casualWeapon(arrFighters) {

    //copia di weapons
    let weapon = [...weapons]

    //Faccio versione mappata dove ogni combattente ha una sua arma
    const addWeapon = arrFighters.map(figth => {
        //Version casual Weapon
        const randomIndex = Math.floor(Math.random() * weapon.length);
        const casualWeapon = weapon[randomIndex];

        // rimuovo l’arma così non è più disponibile
        weapon.splice(randomIndex, 1);


        //ritorno aggiunta armi
        return { ...figth, weaponName: casualWeapon.name, weaponPower: casualWeapon.power }
    })



    return addWeapon

}

// console.log(casualWeapon(fighters))






//### Fase 2 - 💪 Allenamento
// Ogni combattente si sottoporrà a un allenamento che incrementerà (o forse no) la sua potenza.
// La potenza verrà moltiplicata per un numero casuale tra **1 e 100**.

//Arr di obj modificato 
const arrObjCompleto = casualWeapon(fighters)

//allenamento incremento power
const allenamento = arrObjCompleto.map(fighter => {

    //potenza casuale incremento
    const incrementoPotenza = Math.floor(Math.random() * 100) + 1;

    //Copia di fighter e modifico power
    return { ...fighter, power: fighter.power * incrementoPotenza }

})

//Debug
// console.log(allenamento);




//### Fase 3 - 🎯 Qualificazione
// Escludiamo dal torneo chi, dopo l'allenamento, non ha raggiunto una potenza di almeno **2000**.

//Uso filter per dire che se non hanno raggiunto almeno 2000 di power saranno scartati dal nuovo arr
const qualificazione = allenamento.filter(fightPower => {
    return fightPower.power >= 2000
})

//Log aggiornato di qualificazione 
// console.log(qualificazione)








// ### Fase 4 - ⚔️ Combattimento
// I combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco.  //RIFORMULO I COMBATTIMENTI SI SVOLGONO TRA UN PARTECIPANTE QUINDI IL PRIMO E  IL SUCCESSIVO DELL ARR DI OBJ


// Regole principali:
// - Ogni combattente combatte una sola volta.
// - Vince chi ha la potenza più alta.
// - In caso di parità, vince chi "gioca in casa" (ossia chi viene prima nell'elenco).
// - ⚠️ Se il numero di combattenti è dispari, aggiungi un combattente "Robot" con potenza **4000** per garantire gli scontri.

//Salvo copia qualificazione
const combattenti = [...qualificazione]

const arrVincitori = []

for (let i = 0; i < combattenti.length; i++) {
    const element = combattenti[i];
    // console.log(element);

    //Condizione Combattimento 
    if (i % 2 === 0) {
        //Primo combattente 
        const firstCombattente = element

        //Secondo combattente con verifica se e undefined aggiungi ROBOT
        const secondCombattente = !combattenti[i + 1] ? { name: "Robot", power: 4000 } : combattenti[i + 1];

        //condizione potenza alta e parita 
        if (firstCombattente.power > secondCombattente.power) {
            console.log("Il vincitore con la potenza piu alta e:", firstCombattente)
            arrVincitori.push(firstCombattente)
        } else if (firstCombattente.power === secondCombattente.power) {
            console.log("CASO PARITA VINCE IL PRIMO", firstCombattente)
            arrVincitori.push(firstCombattente)
        } else {
            console.log("Il vincitore con la potenza piu alta e:", secondCombattente)
            arrVincitori.push(secondCombattente)
        }

        //Debug
        // console.log(firstCombattente,secondCombattente)

    }

}


//### Fase 5 - 🏆 Premiazione
// Tra tutti i vincitori degli scontri, saliranno sul podio i **3 combattenti con la potenza più alta**, in ordine decrescente.

//LOG DEGLI ARR VINCINTORI 
console.log(arrVincitori);

//Ordino prima da decrescente e poi prendo i primi tre elementi che hanno la potenza maggiore 
const vincitori = arrVincitori.sort((a, b) => b.power - a.power).slice(0, 3)

//Log dei Vincitori
console.log(vincitori);



// // // // // //  NON FUNZIONA MIO METODO // // // // // // // // // // // 
// //variabili iniziali
// let confronto = { firstCombattente: 0, secondCombattente: 0, thirdCombattente: 0, }

// arrVincitori.forEach(vi => {
//     if (vi.power > confronto.firstCombattente) {
//         confronto.thirdCombattente = confronto.secondCombattente;
//         confronto.secondCombattente = confronto.firstCombattente;
//         confronto.firstCombattente = vi.power;
//     } else if (vi.power > confronto.secondCombattente) {
//         confronto.thirdCombattente = confronto.secondCombattente;
//         confronto.secondCombattente = vi.power;
//     } else if (vi.power > confronto.thirdCombattente) {
//         confronto.thirdCombattente = vi.power;
//     }
// });

// console.log(confronto);
