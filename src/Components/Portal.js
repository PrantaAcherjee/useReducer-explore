import React, { useReducer, useState } from 'react';
import { PortalReducer } from './Reducers/PortalReducer';
import { portalState } from './Reducers/Store/PortalStore';

const Portal = () => {
    const [state,dispatch]=useReducer(PortalReducer,portalState);
    const [name,setName]=useState('');
    return (
        <div>
           <h2>This is Doctors Portal</h2> 
           <h3>Has patients {state.patients.length}</h3>
           <input type="text" onChange={e=>setName(e.target.value)}/>
           <button onClick={()=>dispatch({type:'ADD_PATIENT',name:name})}>ADD PATIENTS</button> <br />
           <h4>--------------------------</h4>
           {
               state.patients.map(patient=> <div key={patient.id}>
                <h3> Name: {patient.name} 
                </h3>
                 <button onClick={()=>dispatch({type:'REMOVE_PATIENT',id:patient.id})}>REMOVE</button>
               </div>)
               
           }
        </div>
    );
};

export default Portal;