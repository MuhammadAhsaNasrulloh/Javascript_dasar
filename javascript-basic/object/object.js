//object literal

//kekurangan : tidak efektif
// let siswaSMK = {
//     nama: 'Ahsan',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Selamat makan ${this.nama}`)
//     }
// };

// let siswiSMK = {
//     nama: 'Bel',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Selamat makan ${this.nama}`)
//     }
// };

//2 .function declaration

// const methodSiswaSMK = {
//     makan:function(porsi){
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}`);
//     },
    
//     main: function(jam){
//         this.energy -= jam;
//         console.log(`Selamat bermain ${this.nama}`)
//     },

//     tidur:function(jam){
//         this.energy += jam * 2;
//         console.log(`Selanat tidur ${this.nama}`)
//     }
// }; 

// function Siswa(nama, energy){
//     let siswaSMK = Object.create(methodSiswaSMK);
//     siswaSMK.nama = nama;
//     siswaSMK.energy = energy;

    
//     return siswaSMK;
// }

// let ahsan = Siswa('Ahsan', 20);

// function Siswa(nama, energy){
//     // let siswaSMK = Object.create(methodSiswaSMK);
    
//     this.nama = nama;
//     this.energy = energy;

    
//     // return siswaSMK;
//     // return this;
// }

// Siswa.prototype.makan = function(porsi){
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan`
// }

// Siswa.prototype.main = function(jam){
//     this.energy -= jam;
//     return `Halo ${this.nama}, selamat main`
// }

// Siswa.prototype.tidur = function(jam){
//     this.energy += jam * 2;
//     return `Halo ${this.nama}, selamat tidur`
// }
// let ahsan = new Siswa('Ahsan', 20)


//3. constractor
// function Siswa(nama, energy){
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi){
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}`)
//     }

//     this.main = function(jam){
//         this.energy -= jam;
//         console.log(`Selamat bermain ${this.nama}`)
//     }
// };

// let ahsan = new Siswa('Ahsan', 20)

// class Siswa{
//     constructor(nama, energy){
//         this.nama = nama;
//         this.energy = energy;
//     }

//     makan(porsi){
//         this.energy += porsi;
//         return `Halo ${this.nama}, selamat makan`;
//     }

//     main(jam){
//         this.energy -= jam;
//         return `Halo ${this.nama}, selamat main`;
//     }

//     tidur(jam){
//         this.energy += jam * 2;
//         return `Halo ${this.nama}, selamat tidur`;
//     }

// }

// let ahsan = new Siswa('Ahsan', 29)

let angka = new Array(5,2,4);
console.log(angka.sort())
