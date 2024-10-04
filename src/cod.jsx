import React, { useState } from 'react'
import data from './data1'

const Cod = () => {
    const [picked,setPicked]=useState([]);
    const [currentItem,setCurrentItem]=useState(0);
    const [multiselect,setMultiselect]=useState(false);
    const handleClick = (pickedIndex)=>{
    if(picked.includes(pickedIndex)){
        let newPicked = picked.filter((i)=>i !== pickedIndex);
        setPicked(newPicked)
       
    }else{
        if(multiselect){
            setPicked(p=>[...p, pickedIndex]);
         }else{
            setPicked([pickedIndex])
         }
    }
    
    }
    const toggleMultiselect = ()=>{
    setMultiselect(!multiselect);
    }
  return (
    <div style={{width:400}}>
        <button onClick={toggleMultiselect} className='toggle'>{multiselect?'Disable Multiselect':'Enable Multiselect'}</button>
        {data.map((dataItem,index)=><div key={dataItem.question}>
            <span onClick={()=>handleClick(index)} key={index}>{dataItem.title} {picked.includes(index)?'-':'+'}</span>
            <div>
                {picked.includes(index)?dataItem.content:null}
            </div>
            
        </div>)}
    </div>
  )
}

export default Cod