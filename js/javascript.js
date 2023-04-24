// javascript

const locations = [
    "Aenucoya","Dreodora","Strikoth","Oyapios","Lunahold"
]

function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function characterTime() {
    const actions = [
        "force","force","strike","strike","move","move","sneak","sneak","craft","craft","talk","talk","sense","sense","focus","focus"
    ];
    let dotsText = "";
    for (i=0; i<=4; i++) {
        const dots = randomString(actions);
        const polka = actions.indexOf(dots);
        actions.splice(polka, 1);
        if (i < 4) {
            dotsText += dots + ", ";
        } else {
            dotsText += dots;
        }
    }

    document.getElementById("action-dots").innerHTML = dotsText;

    const place = randomString(locations);
    console.log(place);

    document.getElementById("locations-time").innerHTML = place;
}