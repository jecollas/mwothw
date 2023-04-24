// javascript

function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function actionDots() {
    const actions = [
        "force","force","strike","strike","move","move","sneak","sneak","craft","craft","talk","talk","sense","sense","focus","focus"
    ];
    let text = "";
    for (i=0; i<=4; i++) {
        const dots = randomString(actions);
        const polka = actions.indexOf(dots);
        actions.splice(polka, 1);
        if (i < 4) {
            text += dots + ", ";
        } else {
            text += dots;
        }
    }

    document.getElementById("action-dots").innerHTML = text;
}