//Importo i dati dei fighters e delle armi
import { fighters } from "./dataFighters.js"
import { weapons } from "./dataWeapons.js"


//log di debug
// console.log(fighters)
// console.log(weapons)


//### Fase 1 - 🔥 Scelta dell'Arma
// Ogni combattente sceglierà casualmente un'arma dalla lista disponibile. 
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

console.log(casualWeapon(fighters))
// ⚠️ Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.





//### Fase 2 - 💪 Allenamento
// Ogni combattente si sottoporrà a un allenamento che incrementerà (o forse no) la sua potenza.

const arrObjCompleto = casualWeapon(fighters)
// console.log(arrObjCompleto);

const allenamento = arrObjCompleto.map(fighter => {
    
    //potenza casuale incremento
    const incrementoPotenza = Math.floor(Math.random() * 100) + 1;

    //Copia di fighter e modifico power
    return {...fighter , power: fighter.power * incrementoPotenza}

})

console.log(allenamento);

// La potenza verrà moltiplicata per un numero casuale tra **1 e 100**.