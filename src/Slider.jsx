import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Slider = (props) => {
    const [images, setImages] = useState([]);
    const [currentImg,setCurrentImg]=useState(0);
    const [indicator,setIndicator]=useState(0);
    const fetchData = async () => {
      try {
        let url = 'https://picsum.photos/v2/list?page=8&limit=10';
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      const getData = async () => {
        const data = await fetchData();
        setImages(data); // Set images after fetching
      };
  
      getData(); // Call the async function
    }, []); // Empty dependency array means this runs once when the component mounts
    useEffect(() => {
        console.log(images); // Log images whenever they change
      }, [images]);   
const prev=(id)=>{
if(id ===0){
  setCurrentImg(images.length-1)
}else{
  setCurrentImg(id - 1)
}
}
const next=(id)=>{
  
  if(id===images.length-1){
    setCurrentImg(0);
  }else{
    
    setCurrentImg(id + 1)
  }
  
}
  return (
    <div className='img-wrapper'>
        {
       images.map((image,index)=>
        <div key={index} className={index === currentImg?'current-image':'hide'}>
           
             <img  src={`${image.download_url}`}></img>
             <BsArrowLeftCircleFill className='arrow left' size={30} onClick={()=>prev(index)}/>
             <BsArrowRightCircleFill className='arrow right' size={30} onClick={()=>next(index)}/>
             
             
            </div>
       
        
       )
       }
       <div className="rap">
       {images.map((image,index)=>
       
        <span key={index} className={index === currentImg?'indicator-active indicator':'indicator indicator-inactive'}>
        </span>
       

)}
       </div>

    </div>
  )
}

export default Slider