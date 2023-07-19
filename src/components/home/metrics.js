import React from 'react'
import {useState, useEffect, useRef, useMemo} from "react";
import "./css/metrics.css";
import CountUp from 'react-countup';
import { countUpRef } from 'react-countup'
import Loader from './loader';



export default function Metrics() {

    const [active, setActive ] = useState(true);
    const [state, setState] = useState(true);

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
        <div className='container metrics-container'>
        <div className='row metrics'>
            <div className='col d-flex justify-content-center'>
              <div className='square'>
                <div className='row value-wrapper'>
              {trees ? <pre className='metric-value'>
                <CountUp start={0} end={trees} duration={1.5} scrollSpyDelay={10} enableScrollSpy={true} scrollSpyOnce={true}>
                  {({countUpRef, start}) => (
                    <span ref={countUpRef} ></span>
                  )}
                </CountUp>
                </pre> : <Loader />}
                </div>
                <div className='row line'>
                  <hr />
                </div>
                <div className='row title gx-0'>
                  Number of Trees Saved
                </div>
                <div className='row'>
                <div className='row metric-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <g clipPath="url(#clip0_30_38)">
                    <path d="M100 6.25C100 28.4375 83.4766 46.7773 62.0703 49.6094C60.6836 39.1797 56.0938 29.7656 49.3164 22.4023C56.7969 9.04297 71.0938 0 87.5 0H93.75C97.207 0 100 2.79297 100 6.25ZM0 18.75C0 15.293 2.79297 12.5 6.25 12.5H12.5C36.6602 12.5 56.25 32.0898 56.25 56.25V62.5V93.75C56.25 97.207 53.457 100 50 100C46.543 100 43.75 97.207 43.75 93.75V62.5C19.5898 62.5 0 42.9102 0 18.75Z" fill="#3A4A01"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_30_38">
                      <rect width="100" height="100" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                </div>
              </div>
              </div>
            </div>

            <div className='col d-flex justify-content-center'>
              <div className='square'>
                <div className='row value-wrapper'>
              {cars ? <pre className='metric-value'>
              <CountUp start={state ? 0: cars} end={cars} duration={1.5} scrollSpyDelay={10} enableScrollSpy={true} scrollSpyOnce={true}>
                {({countUpRef, start}) => (
                  <span ref={countUpRef} ></span>
                )}
              </CountUp>
              </pre> : <Loader />}
                </div>
                <div className='row line'>
                  <hr />
                </div>
                <div className='row title gx-0'>
                  Number of Cars Powered
                </div>
                <div className='row'>
                  <div className='row metric-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <g clipPath="url(#clip0_30_36)">
                        <path d="M16.6667 0C10.5382 0 5.55556 5.60547 5.55556 12.5V87.5C2.48264 87.5 0 90.293 0 93.75C0 97.207 2.48264 100 5.55556 100H55.5556C58.6285 100 61.1111 97.207 61.1111 93.75C61.1111 90.293 58.6285 87.5 55.5556 87.5V59.375H58.3333C62.1701 59.375 65.2778 62.8711 65.2778 67.1875V73.4375C65.2778 81.2109 70.868 87.5 77.7778 87.5C84.6875 87.5 90.2778 81.2109 90.2778 73.4375V49.2773C95.9201 47.2852 100 41.3672 100 34.375V28.125C100 26.4062 98.75 25 97.2222 25H94.4444V15.625C94.4444 13.9062 93.1944 12.5 91.6667 12.5C90.1389 12.5 88.8889 13.9062 88.8889 15.625V25H83.3333V15.625C83.3333 13.9062 82.0833 12.5 80.5555 12.5C79.0278 12.5 77.7778 13.9062 77.7778 15.625V25H75C73.4722 25 72.2222 26.4062 72.2222 28.125V34.375C72.2222 41.3672 76.3021 47.2852 81.9444 49.2773V73.4375C81.9444 76.0352 80.0868 78.125 77.7778 78.125C75.4688 78.125 73.6111 76.0352 73.6111 73.4375V67.1875C73.6111 57.6953 66.7708 50 58.3333 50H55.5556V12.5C55.5556 5.60547 50.5729 0 44.4444 0H16.6667ZM37.6562 16.1523C38.6979 16.9336 39.1319 18.3984 38.75 19.7266L34.4097 34.3555H44.4444C45.6076 34.3555 46.6493 35.1758 47.0486 36.3867C47.4479 37.5977 47.1354 38.9844 46.25 39.8438L26.8056 58.5938C25.8507 59.5117 24.4792 59.5898 23.4549 58.8086C22.4306 58.0273 21.9792 56.5625 22.3611 55.2344L26.7014 40.6055H16.6667C15.5035 40.6055 14.4618 39.7852 14.0625 38.5742C13.6632 37.3633 13.9757 35.9766 14.8611 35.1172L34.3056 16.3672C35.2604 15.4492 36.6319 15.3711 37.6562 16.1523Z" fill="#3A4A01"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_30_36">
                          <rect width="100" height="100" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className='col d-flex justify-content-center'>
             <div className='square'>
              <div className='row value-wrapper'>
              {houses ? <pre className='metric-value'>
              <CountUp start={state ? 0: houses} end={houses} duration={1.5} scrollSpyDelay={10} enableScrollSpy={true} scrollSpyOnce={true}>
                  {({countUpRef, start}) => (
                    <span ref={countUpRef} ></span>
                  )}
                </CountUp>
              </pre> : <Loader />}
              </div>
              <div className='row line'>
                  <hr />
              </div>
              <div className='row title gx-0 houses-title'>
                Number of Houses Powered
              </div>
              <div className='row'>
              <div className='row metric-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M92.2679 0.46672C93.1892 1.03612 93.75 2.04195 93.75 3.125V96.875C93.75 98.6009 92.3509 100 90.625 100H71.875C70.1491 100 68.75 98.6009 68.75 96.875V87.5H62.5V96.875C62.5 98.6009 61.1009 100 59.375 100H3.125C1.39911 100 0 98.6009 0 96.875V62.5C0 61.1549 0.860719 59.9607 2.13679 59.5354L37.5 47.7476V28.125C37.5 26.9413 38.1688 25.8593 39.2275 25.3299L89.2275 0.329918C90.1962 -0.154439 91.3466 -0.102676 92.2679 0.46672ZM37.5 54.3357L6.25 64.7524V93.75H37.5V54.3357ZM43.75 93.75H56.25V84.375C56.25 82.6491 57.6491 81.25 59.375 81.25H71.875C73.6009 81.25 75 82.6491 75 84.375V93.75H87.5V8.18136L43.75 30.0564V93.75Z" fill="#3A4A01"/>
                <path d="M12.5 68.75H18.75V75H12.5V68.75Z" fill="#3A4A01"/>
                <path d="M25 68.75H31.25V75H25V68.75Z" fill="#3A4A01"/>
                <path d="M12.5 81.25H18.75V87.5H12.5V81.25Z" fill="#3A4A01"/>
                <path d="M25 81.25H31.25V87.5H25V81.25Z" fill="#3A4A01"/>
                <path d="M50 56.25H56.25V62.5H50V56.25Z" fill="#3A4A01"/>
                <path d="M62.5 56.25H68.75V62.5H62.5V56.25Z" fill="#3A4A01"/>
                <path d="M50 68.75H56.25V75H50V68.75Z" fill="#3A4A01"/>
                <path d="M62.5 68.75H68.75V75H62.5V68.75Z" fill="#3A4A01"/>
                <path d="M75 56.25H81.25V62.5H75V56.25Z" fill="#3A4A01"/>
                <path d="M75 68.75H81.25V75H75V68.75Z" fill="#3A4A01"/>
                <path d="M50 43.75H56.25V50H50V43.75Z" fill="#3A4A01"/>
                <path d="M62.5 43.75H68.75V50H62.5V43.75Z" fill="#3A4A01"/>
                <path d="M75 43.75H81.25V50H75V43.75Z" fill="#3A4A01"/>
                <path d="M50 31.25H56.25V37.5H50V31.25Z" fill="#3A4A01"/>
                <path d="M62.5 31.25H68.75V37.5H62.5V31.25Z" fill="#3A4A01"/>
                <path d="M75 31.25H81.25V37.5H75V31.25Z" fill="#3A4A01"/>
                <path d="M75 18.75H81.25V25H75V18.75Z" fill="#3A4A01"/>
              </svg>
              </div>
              </div>
              </div>
            </div>
        </div>
        </div>
      );
}

