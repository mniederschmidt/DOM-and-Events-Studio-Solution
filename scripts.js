// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const shuttle = document.getElementById("rocket");

    shuttle.style.position = "absolute";
    shuttle.style.left ="0px";
    shuttle.style.bottom = "0px"; 


    function takeOff(event) {
        if(confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
            shuttle.style.bottom = '225px';
        }    
    }

    function land(event) {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttle.style.bottom = "0px";
        shuttle.style.left ="0px";
    }

    function abortMission(event) {
        if(confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
            shuttle.style.bottom = '0px';
            shuttle.style.left ="0px";
        }    
    }

    takeoff.addEventListener("click", takeOff);
    landing.addEventListener("click", land);
    missionAbort.addEventListener("click", abortMission);

    up.addEventListener("click", function() {
        let shuttleStyle = getComputedStyle(shuttle);
        let backgroundStyle = getComputedStyle(shuttleBackground);

        let newBottom = parseInt(shuttleStyle.bottom) + 10;

        if(newBottom + parseInt(shuttleStyle.height) > parseInt(backgroundStyle.height)) {
            return;
        }

        shuttle.style.bottom = newBottom + 'px';
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });
    down.addEventListener("click", function () {
        shuttle.style.bottom = parseInt(shuttle.style.bottom) - 10 + 'px';
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });
    right.addEventListener("click", function() {
        shuttle.style.left = parseInt(shuttle.style.left) + 10 + 'px';
    });
    left.addEventListener("click", function() {
        shuttle.style.left = parseInt(shuttle.style.left) - 10 +'px';
    });
}

window.addEventListener("load", init);