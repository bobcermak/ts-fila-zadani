
/*INPUT */


/* Pět dřevorubců štípají dřevo, jmeno označuje jejich jmeno a vykon kolik stromu stihnou za hodinu*/








type Rada = {
    jmeno: string,
    vykon: number
}


let prace: Array<Rada> = [
    {jmeno: "Jarda", vykon: 5},
    {jmeno: "Pepa", vykon: 8},
    {jmeno: "Honza", vykon: 4},
    {jmeno: "Bop", vykon: 15},
    {jmeno: "Víťa", vykon: 15},
]

let outputBest: Array<string> = []
let outputBest2: Array<number> = []

let topSekac: number = 0
let xPocet: number = 0
let xCelkBest: number = 0



for (let i of prace) {
    if (i.vykon >= topSekac) {
        topSekac = i.vykon
    }
}

for (let i of prace) {
    if (i.vykon === topSekac) {
        outputBest.push(i.jmeno)
        outputBest2.push(i.vykon)
    }
}

for (let x of prace) {
    xPocet += 1
    xCelkBest += x.vykon
}

type Lidi = {
    jmeno1: string,
    pocet1: number
}

let prumer: number = xCelkBest / xPocet 


console.log(outputBest)
console.log(outputBest2)
console.log(prumer)











/*OUTPUT*/

/*Vypište dřevorubce s největším výkonem může jich být víc*/

/*Vypište průmět stromů, který dohromady zvládnou*/




