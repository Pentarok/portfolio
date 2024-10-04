import React, { useState } from 'react'

const Tab = ({tabContent, onChange}) => {
const [currentIndex,setCurrentIndex]=useState(0);
console.log(tabContent[0].content)
const handleClick = (getCurrentIndex)=>{
setCurrentIndex(getCurrentIndex)

}
  return (
    <>
    <div style={{backgroundColor:'black',
        display:'flex',
        padding:'10px',
       justifyContent:'space-between'

    }}>
     {tabContent && tabContent.map((tab,index)=><div key={tab.label}>
        <span key={index} style={{color:'white',
        backgroundColor:'purple',
        padding:'0px 10px 0px 10px',
        borderRadius:'8px'
     }} onClick={()=>handleClick(index)}>{tab.label}
     
     {}
     </span>
    
     </div>
     )}

    </div>
    <div style={{textAlign:'center',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <div style={{width:'50%'}}>
        {tabContent[currentIndex].content}</div></div>
    </>
  )
}

export default Tab
