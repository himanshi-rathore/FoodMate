import React from 'react'
import "./delivery.css";
import Filters from '../common/filters';
import DeliveryCollection from './deliveryCollection';
import TopBrand from './topBrands';
import ExploreSection from './topBrands/exploreSection';
import { restaurants } from '../../data/restaurants';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList =restaurants;

function Delivery() {
  return (
    <div>
      <div className='max-width'>
    <Filters filterList={deliveryFilters} />
    </div> 
    <DeliveryCollection />
    <TopBrand />
    <ExploreSection  list={restaurantList} collectionName="Delivery Restaurants in Bangalore"/>
    </div>
  )
}

export default Delivery;
