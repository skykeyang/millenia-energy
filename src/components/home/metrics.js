import React from 'react'
import {useState, useEffect} from "react";
import "./css/metrics.css";
import "../styles/styles.css";

export default function Metrics() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://lsw8ocv4a5.execute-api.ap-southeast-1.amazonaws.com/staging/metrics')
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
      }, []);
      console.log(data)

      return (
        <div className='row metrics'>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
      );
}

