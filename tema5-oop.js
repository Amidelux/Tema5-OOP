//Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:

//marca (ex: Volvo, Mazda, Dacia)
//model (ex: XC-60, CX-5, BIGGSTER)
//culoare (ex Negru, Verde, Albastru)
//kilometraj (ex 234 000, 111 000, 20 000)

//definește o metodă de tip getter numita proprietati care va returna proprietățile mașinii sub forma

//Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

class Masina {
    constructor(marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }
    get proprietati () {
        return `Masina [marca = ${this.marca}, model = ${this.model}, culoare = ${this.culoare}, kilometraj = ${this.kilometraj}]`
    }
}

const volvo = new Masina ('VOLVO', 'XdC-60', 'Negru', 234_000 )
console.log(volvo.proprietati)

/*
definește separat o funcție numită main, in care se vor crea 3 instanțe ale clasei mașina folosind operatorul new. 
Fiecare instanță va fi memorata Într-o variabilă separată și va avea proprietăți diferite. 
Afișează proprietățile mașinilor instanțiate folosind getter-ul proprietati.

Pentru mașinile date in exemplu programul va afișa

Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

Masina[marca=Mazda, model=CX-5, culoare=Verde, kilometraj=111 000]

Masina[marca=Dacia, model=BIGGSTER, culoare=Albastru, kilometraj=20 000]
*/
function main() {
    const volvo = new Masina ("VOLVO", "XC-60","Negru", 234_000);
    //const mazda = new Masina ('Mazda', 'CX-5', 'Verde', 111_000);
    //const dacia = new Masina ('Dacia', 'BIGGSTER', 'Albastru', 20_000)
 }

 console.log(volvo.proprietati)

 const mazda = new Masina ('Mazda', 'CX-5', 'Verde', 111_000);
 console.log(mazda.proprietati)

 const dacia = new Masina ('Dacia', 'BIGGSTER', 'Albastru', 20_000)
 console.log(dacia.proprietati)

 /*
 Definește încă o clasa numita MasinaDeCurse. 
 Această clasă va moșteni clasa Masina definita la exercițiul 1, 
 folosind cuvantul cheie extends si va avea un constructor in care se va apela super() 
 (adica superconstructorul).

 MasinaDeCurse va avea o metoda suplimentara numita participaLaCampionat, 
 metoda ce va primi un parametru numit pozitiaInCampionat (un numar). 
 Metoda va afisa “Am castigat locul ” urmat de valoarea parametrului pozitiaInCampionat. 
 Metoda va verifica daca pozitiaInCampionat este un numar mai mare ca 0, 
 iar in cazul in care numarul este mai mic sau egal cu 0, se va afisa mesajul “Nu am castigat niciun premiu”.

 */

 class MasinaDeCurse extends Masina {
    //MasinaDeCurse () {
       // super('Masina')
    //}
    participaLaCampionat(pozitiaInCampionat) {
        if (MasinaDeCurse.participaLaCampionat > 0);
         console.log('Am castigat locul')
    }  
}

const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
m1.participaLaCampionat(30);
//Va afisa mesajul: Am castigat locul 30

m1.participaLaCampionat(-1);
//Va afisa mesajul: Nu am castigat niciun premiu
 