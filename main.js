const dataAtual = new Date ();
let dataNiver = prompt ("Data do próximo evento:");

dataNiver = new Date (dataNiver+"T23:59:59");
let diasQueFaltam = Math.floor((dataNiver-dataAtual)/86400000)

document.querySelector("#dias_restantes").textcontent=diasQueFaltam;