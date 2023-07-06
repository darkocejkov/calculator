

function init(){
    console.log(`[CALCULATOR.JS] LOADED!`)
}

const nEmployees = 9
const avgSalary = 60000
const nOperatories = 6
const nSteri = 1
const nWaiting = 1
const sqFtEntire = 2480
const sqFtOperatory = 120
const ceilingHeight = 9

const costCOBALT = 1995
const cfmCOBALT = 430
const costInstallation = 300
const costElectricity = 1
const costHEPA = 8

const calc_nCOBALT = Number(nOperatories) + Number(nSteri) + Number(nWaiting)
const calc_airChangesPerHourOperatory = (cfmCOBALT*60)/(ceilingHeight)/(sqFtOperatory)
const calc_airChangesPerHourEntire = (cfmCOBALT*60)/ceilingHeight*calc_nCOBALT/sqFtEntire
const calc_capitalCost = (costCOBALT + costInstallation)*calc_nCOBALT

init()