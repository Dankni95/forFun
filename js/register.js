function register() {
    var brukernavn = document.getElementById("brukernavn").value;
    var passord = document.getElementById("passord").value;

    var brukerObj = {
        [brukernavn]:{
        brukernavn: brukernavn,
        passord: passord}
    };
    console.log("denne kjøre");


    registerInput(brukerObj, brukernavn);




}



function registerInput(brukerObj, brukernavn) {

    var found = false;
    for (var i = 0; i < localStorage.length; i++) {

        



        if (localStorage.key(i) == brukernavn) {
             found = true;
            alert("Brukernavnet finnes");
        }

    }

    if (!found) {
        alert("Takk for din registrering");
        localStorage.setItem(brukerObj[brukernavn].brukernavn, JSON.stringify(brukerObj));
        reg();
    }



}

function reg() {
    location.href = '/forFun/index.html';

}