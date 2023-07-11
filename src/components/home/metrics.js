import React from 'react'
import {useState, useEffect} from "react";
import "./css/metrics.css";
import "../../styles/styles.css";
import { json } from 'react-router-dom';

export default function Metrics() {

    const [trees, setTrees] = useState(null);
    const [cars, setCars] = useState(null);
    const [houses, setHouses] = useState(null);

    useEffect(() => {
        fetch('https://lsw8ocv4a5.execute-api.ap-southeast-1.amazonaws.com/staging/metrics')
          .then(response => response.json())
          .then(json => json.forEach(element => {
              if(element[0] == 'Number of trees saved') {
                setTrees(element[1])
              }
              if(element[0] == 'Number of cars powered') {
                setCars(element[1])
              }
              if(element[0] == 'Number of houses powered') {
                setHouses(element[1])
              }
          }))
          .catch(error => console.error(error));
      }, []);


      return (
        <div className='row metrics'>
            <div className='col d-flex justify-content-center'>
              <div className='square'>
                <div className='row value-wrapper'>
              {trees ? <pre className='metric-value'>{JSON.stringify(trees, null, 2)}</pre> : 'Loading...'}
                </div>
                <div className='row'>
                  Number of Trees Saved
                </div>
              </div>
            </div>

            <div className='col d-flex justify-content-center'>
              <div className='square'>
                <div className='row value-wrapper'>
              {cars ? <pre className='metric-value'>{JSON.stringify(cars, null, 2)}</pre> : 'Loading...'}
                </div>
                <div className='row'>
                  Number of Cars Powered
                </div>
              </div>
            </div>

            <div className='col d-flex justify-content-center'>
             <div className='square'>
              <div className='row value-wrapper'>
              {houses ? <pre className='metric-value'>{JSON.stringify(houses, null, 2)}</pre> : 'Loading...'}
              </div>
              <div className='row'>
                Number of Houses Powered
              </div>
              </div>
            </div>
            
        </div>
      );
}

