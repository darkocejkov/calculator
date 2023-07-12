import "./App.css";


import {useState} from 'react'

const NumberInput = ({label, value, setValue, id}) => (
    <div className='form-input'>
      <label htmlFor={id}>{label}</label>
      <input id={id} min={0} type={'number'} value={value} onChange={(e) => setValue(Number(e.target.value))}/>
    </div>
)

const StatDisplay = ({label, stat}) => (
    <h3 className={'stat'}>
      <span className={'label'}>{label}</span>
      <span className={'number'}>{stat}</span>
    </h3>
)

function App() {
  const nEmployees = useState(9)
  const avgSalary = useState(60000)
  const nOperatories = useState(6)
  const nSteri = useState(1)
  const nWaiting = useState(1)
  const sqFtEntire = useState(2480)
  const sqFtOperatory = useState(120)
  const ceilingHeight = useState(9)

  const costCOBALT = useState(1995)
  const cfmCOBALT = useState(430)
  const costInstallation = useState(300)
  const costElectricity = useState(1)
  const costHEPA = useState(8)

  const calc_nCOBALT = (nOperatories[0]) + (nSteri[0]) + (nWaiting[0])
  const calc_airChangesPerHourOperatory = ((cfmCOBALT[0])*60)/((ceilingHeight[0]))/((sqFtOperatory[0]))
  const calc_airChangesPerHourEntire = (cfmCOBALT[0]*60)/(ceilingHeight[0])*(calc_nCOBALT)/(sqFtEntire[0])
  const calc_capitalCost = (costCOBALT[0] + (costInstallation[0]))*(calc_nCOBALT)

  return (
      <div className={'wrapper'}>
        <div className={'form'}>

          <div className="container">

            <NumberInput label={"# Employees"} id={'nEmployees'} value={nEmployees[0]} setValue={nEmployees[1]}/>

            <NumberInput value={avgSalary[0]} setValue={avgSalary[1]} label={'Average Salary'} id={'avgSalary'}/>
            <NumberInput value={nOperatories[0]} setValue={nOperatories[1]} label={'# Operatories'} id={'nOperatories'}/>
            <NumberInput value={nSteri[0]} setValue={nSteri[1]} label={'# Steri'} id={'nSteri'}/>
            <NumberInput value={nWaiting[0]} setValue={nWaiting[1]} label={'# Waiting Rooms'} id={'nWaiting'}/>
            <NumberInput value={sqFtEntire[0]} setValue={sqFtEntire[1]} label={'Sqft. of entire practice'} id={'sqFtEntire'}/>
            <NumberInput value={sqFtOperatory[0]} setValue={sqFtOperatory[1]} label={'Sqft. of Operatory (avg)'} id={'sqFtOperatory'}/>
            <NumberInput value={ceilingHeight[0]} setValue={ceilingHeight[1]} label={'Ceiling Height'} id={'ceilingHeight'}/>
            <NumberInput value={costCOBALT[0]} setValue={costCOBALT[1]} label={'Cost of Cobalt (2 x 2)'} id={'costCOBALT'}/>
            <NumberInput value={costInstallation[0]} setValue={costInstallation[1]} label={'Cost of Installation'} id={'costInstallation'}/>
            <NumberInput value={cfmCOBALT[0]} setValue={cfmCOBALT[1]} label={'CFM of 1 COBALT (2 x 2) @ less than 50dB'} id={'cfmCOBALT'}/>
            <NumberInput value={nEmployees[0]} setValue={nEmployees[1]} label={'Cost of Electricity for 1 COBALT, monthly'} id={'nEmployees'}/>
            <NumberInput value={costHEPA[0]} setValue={costHEPA[1]} label={'Cost of HEPA filters of 1 COBALT, monthly'} id={'costHEPA'}/>

          </div>

          <div className={'container'}>
            <StatDisplay label={'# of COBALT (2 x 2) required'} stat={calc_nCOBALT}/>
            <StatDisplay label={'Air Changes Per Hour, Per Operatory'} stat={calc_airChangesPerHourOperatory.toFixed(2)}/>
            <StatDisplay label={'Air Changes Per Hour, entire Practice'} stat={calc_airChangesPerHourEntire.toFixed(2)}/>
            <StatDisplay label={'Capital Cost of Equipment including Installation'} stat={calc_capitalCost}/>
          </div>

        </div>
      </div>

  );
}

export default App;
