import "./App.css";


import {useState} from 'react'

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

  const calc_nCOBALT = Number(nOperatories[0]) + Number(nSteri[0]) + Number(nWaiting[0])
  const calc_airChangesPerHourOperatory = (cfmCOBALT[0]*60)/(ceilingHeight[0])/(sqFtOperatory[0])
  const calc_airChangesPerHourEntire = (cfmCOBALT[0]*60)/ceilingHeight[0]*calc_nCOBALT/sqFtEntire[0]
  const calc_capitalCost = (costCOBALT[0] + costInstallation[0])*calc_nCOBALT

  return (
    <div>

      <div className="container">
        <div className='form-input'>
          <label># Employees</label>
          <input value={nEmployees[0]} onChange={(e) => nEmployees[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label>Average Salary</label>
          <input value={avgSalary[0]} onChange={(e) => avgSalary[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label># Operatories</label>
          <input value={nOperatories[0]} onChange={(e) => nOperatories[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label># Steri Centers</label>
          <input value={nSteri[0]} onChange={(e) => nSteri[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label># Waiting Rooms</label>
          <input value={nWaiting[0]} onChange={(e) => nWaiting[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label>Sqft. of Entire Practice</label>
          <input value={sqFtEntire[0]} onChange={(e) => sqFtEntire[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label>Sqft. of Each Operatory (avg)</label>
          <input value={sqFtOperatory[0]} onChange={(e) => sqFtOperatory[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label>Ceiling Height</label>
          <input value={ceilingHeight[0]} onChange={(e) => ceilingHeight[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label>Cost of COBALT (2 x 2)</label>
          <input value={costCOBALT[0]} onChange={(e) => costCOBALT[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label>Installation</label>
          <input value={costInstallation[0]} onChange={(e) => costInstallation[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label>CFM of 1 COBALT (2 x 2) @ less than 50dB</label>
          <input value={cfmCOBALT[0]} onChange={(e) => cfmCOBALT[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label>Cost of Electricity for 1 COBALT, monthly</label>
          <input value={costElectricity[0]} onChange={(e) => nEmployees[1](e.target.value)}/>
        </div>
        <div className='form-input'>
          <label>Cost of HEPA filters of 1 COBALT, monthly</label>
          <input value={costHEPA[0]} onChange={(e) => costHEPA[1](e.target.value)}/>
        </div>
      </div>

      <hr />

      <div>
        <h3># of COBALT (2 x 2) required: {calc_nCOBALT}</h3>
        <h3>Air Changes Per Hour, Per Operatory: {calc_airChangesPerHourOperatory}</h3>
        <h3>Air Changes Per Hour, entire Practice: {calc_airChangesPerHourEntire}</h3>
        <h3>Capital Cost of Equipment including Installation: {calc_capitalCost}</h3>
      </div>

      <hr />

      <div className="container">

        <div className='form-input'>
          <label>Residual Value</label>
          <input value={costHEPA[0]} onChange={(e) => costHEPA[1](e.target.value)}/>
        </div>

        <div className='form-input'>
          <label>Interest Rate</label>
          <input value={costHEPA[0]} onChange={(e) => costHEPA[1](e.target.value)}/>
        </div>

        <div className='form-input'>
          <label>Lease Period (months)</label>
          <input value={costHEPA[0]} onChange={(e) => costHEPA[1](e.target.value)}/>
        </div>

      </div>

      <div>
        <h3>Monthly Lease Payment (equipment & installation): {calc_nCOBALT}</h3>
      </div>

      <hr />

      <div>
        <h3>Annual Wage: ${avgSalary[0]} / Monthly Wage: ${avgSalary[0]/12}</h3>
        <h3>10% Productivity Increase: {}</h3>
        <h3>Cost of Purified Air per Employee, Per month (incl. lease, elec., filters): {}</h3>
        <h3>Cost of Purified Air Per Employee Per Month (electrical and filters only): {}</h3>
        <h3>Effective Pay Increase Per Employee Per Hour (including lease, electrical and filters): {}</h3>
        <h3>Effective Pay Increase Per Employee Per Hour (electrical and filters only): {}</h3>
      </div>

    </div>
  );
}

export default App;
