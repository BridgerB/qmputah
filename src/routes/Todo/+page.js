export async function load({ fetch }) {
    const response2 = await fetch('https://qmputah-2022-10-06-default-rtdb.firebaseio.com/qmpsCorrected.json?print=pretty');
    const qmpsCorrected = await response2.json()
    let qmpsBroken = []
    let time = new Date();
    for (const element of await qmpsCorrected) {
        if (element.newPatient && element.practice != 'skip') {
            if (Math.floor((time - element.timestamp) / 1000 / 60 / 60 / 24) > 1) {

                qmpsBroken.push(element)
            }
        }
    }

    return {
        qmpsBroken: qmpsBroken,
    }
}
