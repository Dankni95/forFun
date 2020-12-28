var pop = {
    // (A) ATTACH POPUP HTML
    pWrap: null, // HTML popup wrapper
    pBox: null, // HTML popup box
    pTitle: null, // HTML popup title
    pText: null, // HTML popup text
    pClose: null, // HTML close button
    init: function () {
        // (A1) POPUP WRAPPER
        pop.pWrap = document.createElement("div");
        pop.pWrap.id = "pop-up";
        document.body.appendChild(pop.pWrap);

        // (A2) POPUP BOX
        pop.pBox = document.createElement("div");
        pop.pBox.id = "pop-box";
        pop.pWrap.appendChild(pop.pBox);

        // (A3) TITLE
        pop.pTitle = document.createElement("h1");
        pop.pTitle.id = "pop-title";
        pop.pBox.appendChild(pop.pTitle);

        // (A4) TEXT
        pop.pText = document.createElement("p");
        pop.pText.id = "pop-text";
        pop.pBox.appendChild(pop.pText);

        // (A5) CLOSE
        pop.pClose = document.createElement("div");
        pop.pClose.id = "pop-close";
        pop.pClose.innerHTML = "☒";
        pop.pClose.onclick = pop.close;
        pop.pBox.appendChild(pop.pClose);
    },

    // (B) OPEN POPUP
    open: function (title) {
        pop.pTitle.innerHTML = title;
        pop.pText.innerHTML = `<div class="container">
        <label>Brukernavn : </label>
        <input id="regbrukernavn" type="text" name="username" value="" required>
        <label>Passord : </label>
        <input id="regpassord" type="text" name="password" value="" required>
        <button onclick="register()">Registrer</button
    </div>`;
        pop.pWrap.classList.add("open");
    },

    // (C) CLOSE POPUP
    close: function () {
        pop.pWrap.classList.remove("open");
    }
};
window.addEventListener("DOMContentLoaded", pop.init);


function register() {
    console.log("register r");
    var brukernavn = document.getElementById("regbrukernavn").value;
    var passord = document.getElementById("regpassord").value;

    var brukerObj = {
        [brukernavn]: {
            brukernavn: brukernavn,
            passord: passord
        }
    };
    console.log(brukerObj);


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
    location.reload();

}


function login() {
    var brukernavn = document.getElementById("brukernavn").value;
    var passord = document.getElementById("passord").value;


    var brukerObj = {
        brukernavn: brukernavn,
        passord: passord
    };
    var passordFound = false;

    
        var localAcc = JSON.parse(localStorage.getItem(brukernavn));
        // scrap this lol

       
            var localBruker = localAcc[brukernavn].brukernavn;
            var localPw = localAcc[brukernavn].passord;


            if (localPw == brukerObj.passord && localBruker == brukerObj.brukernavn) {

                passordFound = true;
                console.log("localStorage-passord: ", localPw, "brukerObj-passord: ", brukerObj.passord,
                    "localStorage-brukernavn: ", localBruker, "brukerObj-brukernavn: ", brukerObj.brukernavn);
                alert("Logger deg inn...");
                loggedInn();
            }

            if (!passordFound) {
                console.log(passordFound);
                alert("feil brukernavn eller passord!");
        
            }
            function loggedInn() {
                console.log(brukerObj.brukernavn);
                location.href = `user.html?${brukerObj.brukernavn}`;
        
            }
            
        }
    


    

  


