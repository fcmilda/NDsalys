'use strict';


//šalių masyvas
let salys = [
    { pav: 'Libija', plotas: 1759540, gyv: 6959000},
    { pav: 'Sakartvelas', plotas: 69700, gyv: 3972532},
    { pav: 'Kanada', plotas: 9984670, gyv: 38131104},
    { pav: 'Portugalija', plotas: 92212, gyv: 10347892},
    { pav: 'Italija', plotas: 301338, gyv: 60317116},
]


//BE FUNKCIJOS
/*
for (let x of salys) {
    let m2 = (x.plotas / x.gyv * 1000000).toFixed(2);
    console.log(`Šalis: ${x.pav}, joje gyvena ${(x.gyv / 1000000).toFixed(2)} mln. gyventojų.`);
    console.log(`Valstybės plotas: ${x.plotas} km², plotas tenkantis vienam gyventojui: ${m2} m².`);
    console.log("----------------------");
}
*/



//SU FUNKCIJA
function info(pav, plotas, gyv) {
    let m2f = (plotas / gyv * 1000000).toFixed(2);
    console.log(`Šalis: ${pav}, joje gyvena ${(gyv/1000000).toFixed(2)} mln. gyventojų.`);
    console.log(`Valstybės plotas: ${plotas} km², plotas tenkantis vienam gyventojui: ${m2f} m².`);
    console.log("----------------------");
}

for (let x of salys) {
    info(x.pav, x.plotas, x.gyv);
} 

