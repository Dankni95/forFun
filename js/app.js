function reg() {
    location.href = '/forFun/register.html';

}



function login() {
    var brukernavn = document.getElementById("brukernavn").value;
    var passord = document.getElementById("passord").value;

    var brukerObj = {
        brukernavn: brukernavn,
        passord: passord
    };

    var x;
    var found = false;
    var passordFound = false;

    for (var i = 0; i < localStorage.length; i++) {
        x = JSON.parse((localStorage.getItem(localStorage.key(i))));


        if (x.brukernavn == brukerObj.brukernavn) {

            found = true;
            console.log(found);
            console.log("localStorage-brukernavn: ", x.brukernavn, "brukerObj-brukernavn: ", brukerObj.brukernavn);
            var localBruker = x.brukernavn;
            var localPw = x.passord;


        }
    }
    for (var o = 0; o < localStorage.length; o++) {
        
        if ( localPw == brukerObj.passord && localBruker == brukerObj.brukernavn) {
            
            passordFound = true;
            console.log("localStorage-passord: ", localPw, "brukerObj-passord: ", brukerObj.passord,
                "localStorage-brukernavn: ", localBruker, "brukerObj-brukernavn: ", brukerObj.brukernavn);
            alert("Logger deg inn...");
            loggedInn();
            break;

        }
    }


    if (!found || !passordFound) {
        console.log(passordFound);
        alert("feil brukernavn eller passord!");

    }

    function loggedInn() {
        console.log(brukerObj.brukernavn);
        location.href = `//user.html?${brukerObj.brukernavn}`;
    
    }


}