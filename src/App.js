import React,{useState} from "react"

import './App.css';
      

function App()  {
      
      
      const [reactorSpecs,setReactorSpecs]=useState(false)

      const [condenserSpecs,setCondenserSpec]=useState(false)
      const [boxCondenserSpecs,setBoxCondenserSpecs]=useState(false)
      const [filterSpecs,setFilterSpecs]=useState(false)
      const [diameter,setDiameter]=useState(0)
      const [height,setHeight]=useState(0)
      const [shellThickness,setShellThickness]=useState(0)
      const [dishDia,setDishdia]=useState(0)
      const [straightface,setFace]=useState(0)
      const [dishThickness,setDishthick]=useState(0)
      const [weight,setWeight]=useState({})
      const [selectedOption,setSelectedOption]=useState(null)
      const [sweep,setSweep]=useState(0)
      const [ancHeight,setAnchorHt]=useState(0)
      const [anchorThk,setAnchorThk]=useState(0)
      const [anchorWidth,setAnchorWidth]=useState(0)
      const [turbineSweep,setTurbSweep]=useState(0)
       const [turbineThk,setTurbineThk]=useState(0)
      const [bladeWidth,setBladeWidth]=useState(0)
      const [blade,setBlades]=useState(0)
      const [outerDia,setOuterDia]=useState(0)
      const [flangeThk,setFlangeThk]=useState(0)
      const [shaftDia,setShaftDia]=useState(0)
      const [shaftLength,setShaftLength]=useState(0)
      const [bushDia,setBushDia]=useState(0)
      const [bushHt,setBushHt]=useState(0)
      const [bushFlangeThk,setBushFlgThk]=useState(0)
      const [bushFlgDia,setBushFlgDia]=useState(0)
      const [basePlateOd,setBaseplateOd]=useState(0)
      const [basePlateThk,setBaseplateThk]=useState(0)
      const [driveFlange,setDriveFlange]=useState(0)
      const [driveFlangeThk,setDriveFlangeThk]=useState(0)
      const [driveShellDia,setDriveShellDia]=useState(0)
      const [driveShellHt,setDriveShellHt]=useState(0)
      const [driveShellThk,setDriveShellthk]=useState(0)
      const [stiffWidth,setStiffWidth]=useState(0)
      const [stiffThk,setStiffThk]=useState(0)
      const [shellOd,setShellOd]=useState(0)
      const [stiffShellHt,setStiffShellHt]=useState(0)
      const [pitch,setPitch]=useState(0)
      const [limpetSize,setLimpetSize]=useState(0)
      const [coilWidth,setCoilWidth]=useState(0)
      const [coilThk,setCoilThk]=useState(0)
      const [manHoleFlange,setManHoleFlange]=useState(0)
      const [manHoleFlangeThk,setManHoleFlangeThk]=useState(0)
      const [manHoleShellDia,setManHoleShellDia]=useState(0)
      const [manHoleShellHt,setManHoleShellHt]=useState(0)
      const [manHoleShellThk,setManHoleShellthk]=useState(0)
      const [tubeSheetDia,setTubeSheetDia]=useState(0)
      const [tubeSheetThk,setTubeThk]=useState(0)
      const [tubeDia,setTubeDia]=useState(0)
      const [tubeThk,setTubeThick]=useState(0)
      const [tubeLength,setTubeLen]=useState(0)
      const [noOfTubes,setNoOfTubes]=useState(0)
      const [baseThk,setBasePThk]=useState(0)
      const [gussetThk,setGussetThk]=useState(0)
      const [tubeSheetLen,setTubeSheetLen]=useState(0)
      const [tubeSheetLength,setTubeSheetLength]=useState(0)


      const handleReactorSpecs=()=>{
            
            setReactorSpecs(true);
            setCondenserSpec(false)
            setBoxCondenserSpecs(false);
            setFilterSpecs(false)
      }

      const handleCondenserSpecs=()=>{
            
            setCondenserSpec(true);
            setReactorSpecs(false)
            setBoxCondenserSpecs(false);
            setFilterSpecs(false)
      }

      const handleBoxCondenserSpecs=()=>{
            
            setBoxCondenserSpecs(true);
            setReactorSpecs(false);
            setCondenserSpec(false)
            setFilterSpecs(false)

      }
      const handleFilterSpecs=()=>{
            setFilterSpecs(true)
            setBoxCondenserSpecs(false);
            setReactorSpecs(false);
            setCondenserSpec(false)

      }
      const handleOptionChange=(event)=>{
       setSelectedOption(event.target.value)
      console.log(selectedOption)}
      
      
      function calculateShellWeight(diameter,height,shellThickness){
            const volume=(3.142*diameter*height*shellThickness*8)/10**6
       return volume
       }
       function calculateDishWeight(dishDia,straightface,dishThickness){
            const area=(((dishDia+dishThickness)+2*straightface)+dishDia/10)
       return (area**2*8*dishThickness)/10**6
       }
       function calculateBodyFlangeWeight(outerDia,flangeThk){
            const flangeWeight=(((outerDia*3.142)+400)*75*(flangeThk+5)*8)/10**6
      return flangeWeight
      }
       function calculateAnchorWeight(sweep,ancHeight,anchorThk,anchorWidth){
         const bush=((anchorWidth+10)*0.785*100*100*8*2)/10**6
         const anchorLength=((sweep*2)+(ancHeight*2))
         const anchorTotalWeight=(anchorLength*anchorWidth*anchorThk*8)/10**6
         const secondBladeWt=(anchorLength*(anchorWidth/2)*anchorThk*8)/10**6
      return (anchorTotalWeight+secondBladeWt+bush)
      }
      function calculateTurbineWeight(turbineSweep,turbineThk,bladeWidth,blade){
       const bush=(0.785*0.1*0.1*100*8*blade)
       const turWt=((turbineSweep*turbineThk*bladeWidth*blade*2)*8)/10**6
      return bush+turWt
      }
      function calculateShaftWeight(shaftDia,shaftLength){
            const shaftWt=((0.785*(shaftDia+5)**2)*shaftLength*8)/10**6
      return shaftWt
      }
      
      function calculateRigidWeight(bushDia,bushHt,bushFlangethk,bushFlgDia){
            const rigidWt=((0.785*(bushDia)**2)*bushHt*8)/10**6
            const rigidFlangeWt=((bushFlgDia**2)*bushFlangethk*8)/10**6
      return rigidWt+rigidFlangeWt
      }
      
      function calculateBasePlateWeight(basePlateOd,basePlateThk){
            const basePlateWeight=(((basePlateOd**2))*basePlateThk*8)/10**6
            const basePlateRing=((basePlateOd*3.142)*70*10*8)/10**6
      return basePlateWeight+basePlateRing
      }
      
      function calculateDriveWeight(driveFlange,driveFlangeThk,driveShellDia,driveShellHt,driveShellThk){
            const driveFlg=(((driveFlange**2))*driveFlangeThk*8*2)/10**6
            const driveShell=(3.142*driveShellDia*driveShellHt*driveShellThk*8)/10**6
       return driveFlg+driveShell
       }
      
       function calculateStiffenerWeight(stiffWidth,stiffThk,shellOd,stiffShellHt,pitch){
         const stiffWeight=(shellOd*3.142)*(stiffWidth*stiffThk*8)*((stiffShellHt/pitch)+(shellOd/1000)*6)/10**6
         return stiffWeight
      }
      function calculateLimpetCoilWeight(LimpetSize,coilWidth,coilThk,shellOd,stiffShellHt,pitch){
       const limpShellWeight=(shellOd*3.142)*(coilWidth*4*8)*(stiffShellHt/pitch)/10**6
       const limpetOnDish=((((shellOd+(shellOd/10)+100)/pitch)*3.142)/2)
       const limpDishWt=(((LimpetSize+(coilThk*2))*3.142)*(coilThk)*8*1000)/10**6
       console.log(limpDishWt)
       return limpShellWeight+(limpDishWt*limpetOnDish)
      }
      function calculateManHoleWeight(manHoleFlange,manHoleFlangeThk,manHoleShellDia,manHoleShellHt,manHoleShellThk){
            const manHoleFlangeWeight=(((((manHoleFlange*3.142)+100)*75*(manHoleFlangeThk+5)*8))/10**6)*2
            const manHoleDish=(manHoleShellDia*1.1)+(10*manHoleShellThk)
            const manHoleDishWt=((manHoleDish**2)*manHoleShellThk*8)/10**6
            const manHoleShellWt=(3.142*(manHoleShellDia+(manHoleShellThk*2))*manHoleShellHt*manHoleShellThk*8)/10**6
            
      return manHoleFlangeWeight+manHoleDishWt+manHoleShellWt
      }

      function calculateTubeSheetWeight(tubeSheetDia,tubeSheetThk){
            const tubeSheetWeight=(((tubeSheetDia**2))*tubeSheetThk*8)/10**6
            
      return tubeSheetWeight
      }

      function calculateTubeWeight(tubeDia,tubeThk,tubeLength,noOfTubes){
            const tubeWeight=(3.142*tubeDia*tubeLength*tubeThk*noOfTubes*8)/10**6
      return tubeWeight
      }
      
      function calculateSaddlesWeight(gussetThk,baseThk,shellOd){
            const gussetWidth=(shellOd*0.866)
            const gussetHt=(400)
            const gussetWt=(gussetWidth*gussetHt*gussetThk*8)/10**6
            const basePWt=((gussetWidth+50)*(100)*baseThk*8)/10**6
            const sidePlate=(gussetHt*80*gussetThk*8)/10**6
            const padWt=((gussetWidth+100)*125*8*gussetThk)/10**6
      return (gussetWt+basePWt+(sidePlate*2)+padWt)
      }
      

      function calculateBoxTubeSheetWeight(tubeSheetDia,tubeSheetLength,tubeSheetThk){
            const boxTubeSheetWeight=(tubeSheetDia*tubeSheetLength*tubeSheetThk*8)/10**6
            
      return boxTubeSheetWeight
      }

      function calculateBoxShellWeight(diameter,straightface,height,shellThickness,dishDia){
            const boxShellWeight=((diameter-(2*dishDia))*(height-(2*dishDia))*shellThickness*8*2)/10**6
            const shellWidthWt=((straightface-(4*shellThickness))*(diameter-(2*dishDia))*8*2)/10**6
      return boxShellWeight+shellWidthWt
      }

      function calculateBonnetShellWt(shellOd,basePlateThk,tubeSheetLen){
            const bonnetBoxShellWeight=((shellOd+60)*(tubeSheetLen-100)*basePlateThk*8*2)/10**6
            const bonnetShellWidthWt=((shellOd-100)*120*8*8)/10**6
      return bonnetBoxShellWeight+bonnetShellWidthWt
      }

      function calculateBonnetFlangeWeight(sweep,ancHeight,anchorThk,anchorWidth){
            const bonnetFlangeWeight=(((3*sweep)+(2*ancHeight))*anchorThk*anchorWidth*8)/10**6
            
      return bonnetFlangeWeight
      }
      
      const  calculateWeights=()=>{
      const shellWeight =calculateShellWeight(diameter,height,shellThickness)
      const dishWeight = calculateDishWeight(dishDia,straightface,dishThickness)
      const bodyFlangeWeight=calculateBodyFlangeWeight(outerDia,flangeThk)
      const anchorWeight=calculateAnchorWeight(sweep,ancHeight,anchorThk,anchorWidth)
      const turWeight=calculateTurbineWeight(turbineSweep,turbineThk,bladeWidth,blade)
      const shaftWeight=calculateShaftWeight(shaftDia,shaftLength)
      const rigidWeight=calculateRigidWeight(bushDia,bushHt,bushFlangeThk,bushFlgDia)
      const baseplateWeight=calculateBasePlateWeight(basePlateOd,basePlateThk)
      const drivesWeight=calculateDriveWeight(driveFlange,driveFlangeThk,driveShellDia,driveShellHt,driveShellThk)
      const stiffenersWeight=calculateStiffenerWeight(stiffWidth,stiffThk,shellOd,stiffShellHt,pitch)
      const limpetCoilWeight=calculateLimpetCoilWeight(limpetSize,coilWidth,coilThk,shellOd,stiffShellHt,pitch)
      const manHoleWeight=calculateManHoleWeight(manHoleFlange,manHoleFlangeThk,manHoleShellDia,manHoleShellHt,manHoleShellThk)
      const tubesheetWt=calculateTubeSheetWeight(tubeSheetDia,tubeSheetThk)
      const tubesWt=calculateTubeWeight(tubeDia,tubeThk,tubeLength,noOfTubes)
      const saddlesWt=calculateSaddlesWeight(gussetThk,baseThk,shellOd)
      const boxTubeSheetWt=calculateBoxTubeSheetWeight(tubeSheetDia,tubeSheetLength,tubeSheetThk)
      const boxShellWt=calculateBoxShellWeight(diameter,straightface,height,shellThickness,dishDia)
      const bonnetBoxShellWt=calculateBonnetShellWt(shellOd,basePlateThk,tubeSheetLen)
      const bonnetFlangeWt=calculateBonnetFlangeWeight(sweep,ancHeight,anchorThk,anchorWidth)
      setWeight({
       shellWeight: isNaN(shellWeight)? 0: shellWeight,
       dishWeight: isNaN(dishWeight)? 0: dishWeight,
       bodyFlangeWeight: isNaN(bodyFlangeWeight)? 0: bodyFlangeWeight,
       anchorWeight: isNaN(anchorWeight)? 0: anchorWeight,
       turWeight: isNaN(turWeight)? 0: turWeight,
       shaftWeight: isNaN(shaftWeight)? 0: shaftWeight,
       rigidWeight: isNaN(rigidWeight)? 0: rigidWeight,
       baseplateWeight: isNaN(baseplateWeight)? 0: baseplateWeight,
       drivesWeight: isNaN(drivesWeight)? 0: drivesWeight,
       stiffenersWeight: isNaN(stiffenersWeight)? 0: stiffenersWeight,
       limpetCoilWeight: isNaN(limpetCoilWeight)? 0: limpetCoilWeight,
       manHoleWeight: isNaN(manHoleWeight)? 0: manHoleWeight,
       tubesheetWt: isNaN(tubesheetWt)? 0: tubesheetWt,
       tubesWt: isNaN(tubesWt)? 0: tubesWt,
       saddlesWt: isNaN(saddlesWt)? 0: saddlesWt,
       boxTubeSheetWt: isNaN(boxTubeSheetWt)? 0: boxTubeSheetWt,
       boxShellWt: isNaN(boxShellWt)? 0: boxShellWt,
       bonnetBoxShellWt: isNaN(bonnetBoxShellWt)? 0: bonnetBoxShellWt,
       bonnetFlangeWt: isNaN(bonnetFlangeWt)? 0: bonnetFlangeWt
      })
      
      }
       return (
        <div style={{backgroundColor: "white",backgroundSize: 'cover'}}>
         
      <h1 className="name-style">BALAJI ENGINEERING EQUIPMENTS</h1>
      <h1 className="name-style">WEIGHT CALCULATOR</h1>
       <nav className="nav-bar">
            <ul className="nav-bar li">
                  <li><a href="#reactor" onClick={()=>handleReactorSpecs()}>Reactor</a></li>
                  <li><a href="#shell" onClick={()=>handleCondenserSpecs()}>Shell and Tube Condenser</a></li>
                  <li><a href="#Box"  onClick={()=>handleBoxCondenserSpecs()}>Box Type Condenser</a></li>
                  <li><a href="#leaf" onClick={()=>handleFilterSpecs()}>Leaf Filter</a></li>
                  
            </ul>
            </nav> 
            <div>
             {reactorSpecs===true  &&(   
         <form id="reactor" >
           <h2>shell</h2>
           <label>Diameter:</label>
           <input type="number" value={diameter} onChange={(e)=>setDiameter(parseFloat(e.target.value))}/>
           <label>Height:</label>
           <input type="number" value={height} onChange={(e)=>setHeight(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={shellThickness} onChange={(e)=>setShellThickness(parseFloat(e.target.value))} />
           <h2>Dish</h2>
           <label>Diameter:</label>
           <input type="number" value={dishDia} onChange={(e=>setDishdia(parseFloat(e.target.value)))}/>
           <label>straight face:</label>
           <input type="number" value={straightface} onChange={(e=>setFace(parseFloat(e.target.value)))}/>
           <label>Thickness:</label>
           <input type="number" value={dishThickness} onChange={(e=>setDishthick(parseFloat(e.target.value)))}/>
      
           <h2>Body Flange</h2>
           <label>Outer Diameter:</label>
           <input type="number" value={outerDia} onChange={(e=>setOuterDia(parseFloat(e.target.value)))}/>
           <label>Thickness:</label>
           <input type="number" value={flangeThk} onChange={(e=>setFlangeThk(parseFloat(e.target.value)))}/>
           
           <div className="radio-button">
            <input type="radio" id="anchor" value="anchor" checked={selectedOption==="anchor"} onChange={handleOptionChange}/>
           <label htmlFor="anchor">Anchor</label>
           
           <input type="radio" id="turbine" value="turbine" checked={selectedOption==="turbine"} onChange={handleOptionChange}/>
           <label htmlFor="turbine">Turbine</label>
           </div>
           {selectedOption==="anchor" &&(<div>
           <label>sweep:</label>
           <input type="number" value={sweep} onChange={(e)=>setSweep(parseFloat(e.target.value))}/>
           <label>height:</label>
           <input type="number"  value={ancHeight}  onChange={(e)=>setAnchorHt(parseFloat(e.target.value))}/>
           <label>thickness:</label>
           <input type="number" value={anchorThk} onChange={(e)=>setAnchorThk(parseFloat(e.target.value))}/>
           <label>anchor width:</label>
           <input type="number" value={anchorWidth} onChange={(e)=>setAnchorWidth(parseFloat(e.target.value))}/>
           
           <h2>Anchor selected</h2>
           </div>)}
      
           {selectedOption==="turbine" &&(<div>
           <label>Sweep:</label>
           <input type="number" value={turbineSweep} onChange={(e)=>setTurbSweep(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={turbineThk} onChange={(e)=>setTurbineThk(parseFloat(e.target.value))}/>
           <label>blades width:</label>
           <input type="number" value={bladeWidth} onChange={(e)=>setBladeWidth(parseFloat(e.target.value))}/>
           <label>number of blades:</label>
           <input type="number" value={blade} onChange={(e)=>setBlades(parseFloat(e.target.value))}/>
           <h2>Turbine selected</h2>
           </div>)}   
      
      
           <h2>Shaft</h2>
           <label>Shaft Dia:</label>
           <input type="number" value={shaftDia} onChange={(e)=>setShaftDia(parseFloat(e.target.value))}/>
           <label>Shaft length:</label>
           <input type="number" value={shaftLength} onChange={(e)=>setShaftLength(parseFloat(e.target.value))} />   
           
           <h2>Rigid Coupling</h2>
           <label>Diameter:</label>
           <input type="number" value={bushDia} onChange={(e)=>setBushDia(parseFloat(e.target.value))}/>
           <label>length:</label>
           <input type="number" value={bushHt} onChange={(e)=>setBushHt(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number"value={bushFlangeThk} onChange={(e)=>setBushFlgThk(parseFloat(e.target.value))} />
           <label>Flange Dia:</label>
           <input type="number" value={bushFlgDia} onChange={(e)=>setBushFlgDia(parseFloat(e.target.value))}/>
      
           
      
           <h2>Base plate</h2>
           <label>Base plate Dia:</label>
           <input type="number" value={basePlateOd} onChange={(e)=>setBaseplateOd(parseFloat(e.target.value))}/>
           <label>thickness:</label>
           <input type="number" value={basePlateThk} onChange={(e)=>setBaseplateThk(parseFloat(e.target.value))}/>
           
           
           <h2>drive Stools </h2>
           <label>Flange Dia:</label>
           <input type="number" value={driveFlange} onChange={(e)=>setDriveFlange(parseFloat(e.target.value))}/>
           <label>thickness:</label>
           <input type="number" value={driveFlangeThk} onChange={(e)=>setDriveFlangeThk(parseFloat(e.target.value))}/>
           <label>shell dia:</label>
           <input type="number" value={driveShellDia} onChange={(e)=>setDriveShellDia(parseFloat(e.target.value))} />
           <label>shell height:</label>
           <input type="number" value={driveShellHt} onChange={(e)=>setDriveShellHt(parseFloat(e.target.value))}/>
           <label>shell thickness:</label>
           <input type="number" value={driveShellThk} onChange={(e)=>setDriveShellthk(parseFloat(e.target.value))}/>
      
           
           <div>
            <input type="radio" id="stiffeners" value="stiffeners" checked={selectedOption==="stiffeners"} onChange={handleOptionChange}/>
           <label htmlFor="stiffeners">stiffeners</label>
           
           <input type="radio" id="limpet" value="limpet" checked={selectedOption==="limpet"} onChange={handleOptionChange}/>
           <label htmlFor="limpetCoil">limpet Coil</label>
           </div>
           
           
                {selectedOption==="stiffeners" &&(<div>
         
           <label>stiffenerWidth:</label>
           <input type="number" value={stiffWidth} onChange={(e)=>setStiffWidth(parseFloat(e.target.value))}/>
           <label>StiffenersThk:</label>
           <input type="number" value={stiffThk} onChange={(e)=>setStiffThk(parseFloat(e.target.value))}/>
           <label>shell OD:</label>
           <input type="number" value={shellOd} onChange={(e)=>setShellOd(parseFloat(e.target.value))} />
           <label>shell height:</label>
           <input type="number" value={stiffShellHt} onChange={(e)=>setStiffShellHt(parseFloat(e.target.value))}/>
           <label>Pitch:</label>
           <input type="number" value={pitch} onChange={(e)=>setPitch(parseFloat(e.target.value))}/>
           
           </div>)}   
      
      
           {selectedOption==="limpet" &&(<div>
           
           <label>limpetSize:</label>
           <input type="number" value={limpetSize} onChange={(e)=>setLimpetSize(parseFloat(e.target.value))}/>
           <label>Coil Width:</label>
           <input type="number" value={coilWidth} onChange={(e)=>setCoilWidth(parseFloat(e.target.value))}/>
           <label>Coil Thk:</label>
           <input type="number" value={coilThk} onChange={(e)=>setCoilThk(parseFloat(e.target.value))}/>
           <label>shell OD:</label>
           <input type="number" value={shellOd} onChange={(e)=>setShellOd(parseFloat(e.target.value))} />
           <label>shell height:</label>
           <input type="number" value={stiffShellHt} onChange={(e)=>setStiffShellHt(parseFloat(e.target.value))}/>
           <label>Pitch:</label>
           <input type="number" value={pitch} onChange={(e)=>setPitch(parseFloat(e.target.value))}/>
           
           </div>)} 
      
      
           <h2>Man Hole </h2>
           
           <label>ManHole Flange Dia:</label>
           <input type="number" value={manHoleFlange} onChange={(e)=>setManHoleFlange(parseFloat(e.target.value))}/>
           <label>thickness:</label>
           <input type="number" value={manHoleFlangeThk} onChange={(e)=>setManHoleFlangeThk(parseFloat(e.target.value))}/>
           <label>manHoleshell dia:</label>
           <input type="number" value={manHoleShellDia} onChange={(e)=>setManHoleShellDia(parseFloat(e.target.value))} />
           <label>manHoleshell height:</label>
           <input type="number" value={manHoleShellHt} onChange={(e)=>setManHoleShellHt(parseFloat(e.target.value))}/>
           <label>manhole shellthickness:</label>
           <input type="number" value={manHoleShellThk} onChange={(e)=>setManHoleShellthk(parseFloat(e.target.value))}/>
       
           
           
           <div>
             <button type="button" onClick={calculateWeights}>calculate Weight</button>
           </div>
           <h2>Weights</h2>
           <ul>
             <li>Shell Weight: {weight.shellWeight}</li>
             <li>dish Weight: {weight.dishWeight}</li>
             <li>bodyFlangeWeight: {weight.bodyFlangeWeight}</li>
             {selectedOption==="anchor" && (<li>anchor weight{weight.anchorWeight}</li>)}
             {selectedOption==="turbine" && (<li>turbine Weight: {weight.turWeight}</li>)}
             <li>shaftWeight: {weight.shaftWeight}</li>
             <li>RigidWeight: {weight.rigidWeight}</li>
              <li>baseplateWeight: {weight.baseplateWeight}</li>
              <li>DrivesWeight: {weight.drivesWeight}</li>
              {selectedOption==="stiffeners" && (<li>stiffener weight{weight.stiffenersWeight}</li>)}
             {selectedOption==="limpet" && (<li>limpetCoil Weight: {weight.limpetCoilWeight}</li>)}
             <li>ManHoleWeight: {weight.manHoleWeight}</li>
           </ul>
         </form>
             )}

{condenserSpecs ===true &&(   
         <form id="shell">
           <h2>TubeSheet</h2>
           <label>Diameter:</label>
           <input type="number" value={tubeSheetDia} onChange={(e)=>setTubeSheetDia(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={tubeSheetThk} onChange={(e)=>setTubeThk(parseFloat(e.target.value))}/>

           <h2>Tubes</h2>
           <label>Diameter:</label>
           <input type="number" value={tubeDia} onChange={(e)=>setTubeDia(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number"  value={tubeThk} onChange={(e)=>setTubeThick(parseFloat(e.target.value))}/>
           <label>Length:</label>
           <input type="number"  value={tubeLength} onChange={(e)=>setTubeLen(parseFloat(e.target.value))}/>
           <label>NumberofTubes:</label>
           <input type="number"  value={noOfTubes} onChange={(e)=>setNoOfTubes(parseFloat(e.target.value))}/>

           <h2>shell</h2>
           <label>Diameter:</label>
           <input type="number" value={diameter} onChange={(e)=>setDiameter(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number"  value={shellThickness} onChange={(e)=>setShellThickness(parseFloat(e.target.value))}/>
           <label>Length:</label>
           <input type="number" value={height} onChange={(e)=>setHeight(parseFloat(e.target.value))}/>

           <h2>Dish</h2>
           <label>Diameter:</label>
           <input type="number" value={dishDia} onChange={(e=>setDishdia(parseFloat(e.target.value)))}/>
           <label>straight face:</label>
           <input type="number" value={straightface} onChange={(e=>setFace(parseFloat(e.target.value)))}/>
           <label>Thickness:</label>
           <input type="number" value={dishThickness} onChange={(e=>setDishthick(parseFloat(e.target.value)))}/>
      

           
           <h2>saddles</h2>
           <label>gusset THick:</label>
           <input type="number" value={gussetThk} onChange={(e=>setGussetThk(parseFloat(e.target.value)))}/>
           <label>Base plateThickness:</label>
           <input type="number" value={baseThk} onChange={(e=>setBasePThk(parseFloat(e.target.value)))}/>
           <label>shell OD:</label>
           <input type="number" value={shellOd} onChange={(e)=>setShellOd(parseFloat(e.target.value))} />
           

           <div>
             <button type="button" onClick={calculateWeights}>calculate Weight</button>
           </div>
           <h2>Weights</h2>
           <ul>
             <li>TubeSheet Weight: {weight.tubesheetWt}</li>
             <li>Tubes Weight: {weight.tubesWt}</li>
             <li>Shell Weight: {weight.shellWeight}</li>
             <li>Dish Weight: {weight.dishWeight}</li>
             <li>Saddles Weight: {weight.saddlesWt}</li>
           </ul>
           </form>)}


           {boxCondenserSpecs ===true &&(   
         <form id="shell">
           <h2>TubeSheet</h2>
           <label>Width:</label>
           <input type="number" value={tubeSheetDia} onChange={(e)=>setTubeSheetDia(parseFloat(e.target.value))}/>
            <label>Length:</label>
           <input type="number" value={tubeSheetLength} onChange={(e)=>setTubeSheetLength(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={tubeSheetThk} onChange={(e)=>setTubeThk(parseFloat(e.target.value))}/>

           <h2>Tubes</h2>
           <label>Diameter:</label>
           <input type="number" value={tubeDia} onChange={(e)=>setTubeDia(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number"  value={tubeThk} onChange={(e)=>setTubeThick(parseFloat(e.target.value))}/>
           <label>Length:</label>
           <input type="number"  value={tubeLength} onChange={(e)=>setTubeLen(parseFloat(e.target.value))}/>
           <label>NumberofTubes:</label>
           <input type="number"  value={noOfTubes} onChange={(e)=>setNoOfTubes(parseFloat(e.target.value))}/>

           <h2>Shell</h2>
           <label>Width:</label>
           <input type="number" value={diameter} onChange={(e)=>setDiameter(parseFloat(e.target.value))}/>
            <label>Pipe Length:</label>
           <input type="number" value={straightface} onChange={(e)=>setFace(parseFloat(e.target.value))}/>
           <label>TubeSheetHeight:</label>
           <input type="number" value={height} onChange={(e)=>setHeight(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={shellThickness} onChange={(e)=>setShellThickness(parseFloat(e.target.value))}/>
           <label>FlangeWidth:</label>
           <input type="number"  value={dishDia} onChange={(e)=>setDishdia(parseFloat(e.target.value))}/>
           
           <h2>Bonnet Shell</h2>
           <label>Width:</label>
           <input type="number" value={shellOd} onChange={(e)=>setShellOd(parseFloat(e.target.value))}/>
           <label>TubeSheetHeight:</label>
           <input type="number" value={tubeSheetLen} onChange={(e)=>setTubeSheetLen(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={basePlateThk} onChange={(e)=>setBaseplateThk(parseFloat(e.target.value))}/>

           <h2>Bonnet Flange</h2>
           <label>TubeSheetWidth:</label>
           <input type="number" value={sweep} onChange={(e)=>setSweep(parseFloat(e.target.value))}/>
            <label>TubeSheetLength:</label>
           <input type="number" value={ancHeight} onChange={(e)=>setAnchorHt(parseFloat(e.target.value))}/>
           <label>FlangeWidth:</label>
           <input type="number" value={anchorThk} onChange={(e=>setAnchorThk(parseFloat(e.target.value)))}/>
           <label>Thickness:</label>
           <input type="number"  value={anchorWidth} onChange={(e)=>setAnchorWidth(parseFloat(e.target.value))}/>
           

           
           <h2>saddles</h2>
           <label>gusset THick:</label>
           <input type="number" value={gussetThk} onChange={(e=>setGussetThk(parseFloat(e.target.value)))}/>
           <label>Base plateThickness:</label>
           <input type="number" value={baseThk} onChange={(e=>setBasePThk(parseFloat(e.target.value)))}/>
           <label>shell OD:</label>
           <input type="number" value={shellOd} onChange={(e)=>setShellOd(parseFloat(e.target.value))} />

           <h2>Bonnet Shell</h2>
           <label>Width:</label>
           <input type="number" value={shellOd} onChange={(e)=>setShellOd(parseFloat(e.target.value))}/>
           <label>TubeSheetHeight:</label>
           <input type="number" value={tubeSheetLen} onChange={(e)=>setTubeSheetLen(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={basePlateThk} onChange={(e)=>setBaseplateThk(parseFloat(e.target.value))}/>


            <div>
             <button type="button" onClick={calculateWeights}>calculate Weight</button>
           </div>
           <h2>Weights</h2>
           <ul>
             <li>TubeSheet Weight: {weight.boxTubeSheetWt}</li>
             <li>Tubes Weight: {weight.tubesWt}</li>
             <li>Shell Weight: {weight.boxShellWt}</li>
             <li>Bonnet Shell Weight: {weight.bonnetBoxShellWt}</li>
             <li>Bonnet Flange: {weight.bonnetFlangeWt}</li>
           </ul>
           </form>)}

           {filterSpecs===true  &&(   
         <form id="leaf" >
           <h2>shell</h2>
           <label>Diameter:</label>
           <input type="number" value={diameter} onChange={(e)=>setDiameter(parseFloat(e.target.value))}/>
           <label>Height:</label>
           <input type="number" value={height} onChange={(e)=>setHeight(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={shellThickness} onChange={(e)=>setShellThickness(parseFloat(e.target.value))} />
           <h2>Dish</h2>
           <label>Diameter:</label>
           <input type="number" value={dishDia} onChange={(e=>setDishdia(parseFloat(e.target.value)))}/>
           <label>straight face:</label>
           <input type="number" value={straightface} onChange={(e=>setFace(parseFloat(e.target.value)))}/>
           <label>Thickness:</label>
           <input type="number" value={dishThickness} onChange={(e=>setDishthick(parseFloat(e.target.value)))}/>
      
           <h2>Body Flange</h2>
           <label>Outer Diameter:</label>
           <input type="number" value={outerDia} onChange={(e=>setOuterDia(parseFloat(e.target.value)))}/>
           <label>Thickness:</label>
           <input type="number" value={flangeThk} onChange={(e=>setFlangeThk(parseFloat(e.target.value)))}/>

           <h2>stiffeners</h2>
           <label>stiffenerWidth:</label>
           <input type="number" value={stiffWidth} onChange={(e)=>setStiffWidth(parseFloat(e.target.value))}/>
           <label>StiffenersThk:</label>
           <input type="number" value={stiffThk} onChange={(e)=>setStiffThk(parseFloat(e.target.value))}/>
           <label>shell OD:</label>
           <input type="number" value={shellOd} onChange={(e)=>setShellOd(parseFloat(e.target.value))} />
           <label>shell height:</label>
           <input type="number" value={stiffShellHt} onChange={(e)=>setStiffShellHt(parseFloat(e.target.value))}/>
           <label>Pitch:</label>
           <input type="number" value={pitch} onChange={(e)=>setPitch(parseFloat(e.target.value))}/>
            
          <h2>Header pipe</h2> 
          <label>Diameter:</label>
           <input type="number" value={tubeDia} onChange={(e)=>setTubeDia(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number"  value={tubeThk} onChange={(e)=>setTubeThick(parseFloat(e.target.value))}/>
           <label>Length:</label>
           <input type="number"  value={tubeLength} onChange={(e)=>setTubeLen(parseFloat(e.target.value))}/>
           <label>NumberofPipes:</label>
           <input type="number"  value={noOfTubes} onChange={(e)=>setNoOfTubes(parseFloat(e.target.value))}/>

           <h2>Leg basePlate </h2>
           <label>Diameter:</label>
           <input type="number" value={tubeSheetDia} onChange={(e)=>setTubeSheetDia(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={tubeSheetThk} onChange={(e)=>setTubeThk(parseFloat(e.target.value))}/>

           <h2>One Leaf Weight</h2>
           <label>Width:</label>
           <input type="number" value={tubeSheetDia} onChange={(e)=>setTubeSheetDia(parseFloat(e.target.value))}/>
            <label>Length:</label>
           <input type="number" value={tubeSheetLength} onChange={(e)=>setTubeSheetLength(parseFloat(e.target.value))}/>
           <label>Thickness:</label>
           <input type="number" value={tubeSheetThk} onChange={(e)=>setTubeThk(parseFloat(e.target.value))}/>

            <div>
             <button type="button" onClick={calculateWeights}>calculate Weight</button>
           </div>
      
           <h2>Weights</h2>
            <ul>
             <li>Shell Weight: {weight.shellWeight}</li>
             <li>dish Weight: {weight.dishWeight}</li>
             <li>bodyFlangeWeight: {weight.bodyFlangeWeight}</li>
             <li>stiffener weight{weight.stiffenersWeight}</li>
             <li>Header Pipe Weight: {weight.tubesWt}</li>
             <li>Leg base Weight: {weight.tubesheetWt}</li>
             <li>Leaf Weight: {weight.boxTubeSheetWt}</li>
             </ul>

           </form>)}
           

          


         </div>
        </div>
       )
           
      
      

      }

export default App;