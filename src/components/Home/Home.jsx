/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [cards, setCards] = useState([])

    // eslint-disable-next-line no-unused-vars
    const [allActor, setAllactor] = useState([])

    const [remaining, setRemaining] = useState(0)

    const [totalHour, setTotalHour] = useState(0)
  

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCards(data))
    },[])

    const handleButton = (regis)=>{
       
        const isExist = allActor.find(item=> (item.credit === regis.credit))
         let count = regis.credit
        //  let price = regis.price
        if(isExist){
            alert('Already its selected, please try another')
        }
     else{
      
         allActor.forEach(item=> (
            count = count + item.credit

            // totalPrice.forEach(item=>(
            //     price = price + item.price
            // ))
        ))
    const totalRemaining = 60 - count
    

    if(count > 60){
      return  alert('do not go ahead')
    }
    else{
        setRemaining(totalRemaining)
        setTotalHour(count)
        
        const newCard = [...allActor, regis]
        setAllactor(newCard) 

    }
        
     }

       
    }


    return (
        <div>
            <h1>Course Registration</h1>


            <div className="main-container">

                <div className='flex-cards'>
            
          {
               // eslint-disable-next-line no-unused-vars
               cards.map((regis)=> (
                <div className="card-container">
                <img key={regis.credit} className="home-img" src={regis.image}alt="" />
                <h3>{regis.course_name}</h3>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <div className='home-price-credit'>
                    <p>Price:{regis.price}</p>
                    <p>📖 Credit: {regis.credit}hr</p>
                </div>
                <button onClick={()=>handleButton(regis)} className='btn'>Select</button>
            </div> 
               ))
          }
        
        </div>


       <div>
       <Cart allActor={allActor} remaining={remaining} totalHour={totalHour} ></Cart>
       </div>


            </div>

           
        </div>
    );
};

export default Home;