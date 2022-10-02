import React, { useState } from 'react'
import Footer from '../../components/common/footer';
import Header from '../../components/common/Header';
import TabOptions from '../../components/common/tabOptions';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/DiningOut';
import NightLife from '../../components/NightLife';


function Homepage() {
  const [activeTab , setActiveTab]= useState("Delivery");
  return (
    <div>
     <Header />
     <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
     {/*function to decide which screen we have to show */}
     {getCorrectScreen(activeTab)}
     <Footer />

    </div>

  )
}

const getCorrectScreen= (tab)=>{
  switch(tab){
    case "Delivery": return <Delivery />
    case "Dining Out" : return <DiningOut />
    case "NightLife" : return  <NightLife />
    default : return <Delivery />
  }
}

export default Homepage;

