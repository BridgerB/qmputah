export async function load({ fetch }) {
  const response2 = await fetch('https://qmputah-2022-10-06-default-rtdb.firebaseio.com/qmpsCorrected.json?print=pretty');
  const qmpsCorrected = await response2.json()
  let qmpsActive = []
  let qmpsInactive = []
  let qmpsRenew = []
  for (const element of await qmpsCorrected) {
    if (element.newPatient && element.practice != 'skip') {
      qmpsActive.push(element)
    }
    else {
      if (element.practice != 'skip') {
        qmpsInactive.push(element)
      }
    }
  }
  qmpsActive.sort((a, b) => a.newPatient - b.newPatient);
  for (const element of await qmpsCorrected) {
    if (element.renewActive6 && element.practice != 'skip') {
      qmpsRenew.push(element)
    }
  }
  qmpsRenew.sort((a, b) => a.renewActive6 - b.renewActive6);
  return {
    qmpsCorrected: qmpsCorrected,
    qmpsActive: qmpsActive,
    qmpsInactive: qmpsInactive,
    qmpsRenew: qmpsRenew
  }
}
