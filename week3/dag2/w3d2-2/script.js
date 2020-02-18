const huisWerkmaken = (vak, callback) => {
    console.log(`Ok, ik ga nu mijn ${vak} maken.`);
    setTimeout(function () {
        callback();
    }, 10000);
}

const klaarMetHuiswerk = () => {
    console.log("Klaar met huiswerk!")
};


huisWerkmaken("wiskunde", klaarMetHuiswerk);