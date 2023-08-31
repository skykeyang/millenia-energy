import React from 'react'
import {useState, useEffect, useRef, useMemo} from "react";
import "./css/metrics2.css";
import CountUp from 'react-countup';
import { countUpRef } from 'react-countup'
import Loader from './loader';



export default function Metrics2() {

    const [active, setActive ] = useState(true);
    const [state, setState] = useState(true);

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);

    const [title1, setTitle1] = useState(null);
    const [title2, setTitle2] = useState(null);
    const [title3, setTitle3] = useState(null);

    useEffect(() => {
        fetch('https://lsw8ocv4a5.execute-api.ap-southeast-1.amazonaws.com/staging/metrics')
          .then(response => response.json())
          .then(json => json.forEach((element,index) => {
              if(index == 0) {
                setTitle1(element[0])
                setValue1(element[1])  
              }
              else if(index == 1) {
                setTitle2(element[0])
                setValue2(element[1])
              }
              else if(index == 2) {
                setTitle3(element[0])
                setValue3(element[1])
              }
          }))
          .catch(error => console.error(error));
      }, []);


      return (
        <div className='metrics-container container metrics'>
        
            <div className='col-4 metric-col d-flex justify-content-center'>

              <div className='row gx-0 circle-row'>
              <div className='circle'>
                <div className='metric-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="59" viewBox="0 0 55 59" fill="none">
                  <g clip-path="url(#clip0_15_35)">
                  <path d="M54.1766 3.90876C54.1766 16.7413 45.279 27.3486 33.7521 28.9865C33.0054 22.9543 30.5339 17.5095 26.8844 13.2508C30.9125 5.52413 38.6111 0.293945 47.4456 0.293945H50.8111C52.6726 0.293945 54.1766 1.90931 54.1766 3.90876ZM0.328369 11.1384C0.328369 9.13894 1.83233 7.52357 3.69388 7.52357H7.0594C20.0692 7.52357 30.618 18.8537 30.618 32.8273V36.4421V54.5161C30.618 56.5156 29.114 58.1309 27.2525 58.1309C25.3909 58.1309 23.887 56.5156 23.887 54.5161V36.4421C10.8772 36.4421 0.328369 25.1119 0.328369 11.1384Z" fill="#3A4A01"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_15_35">
                  <rect width="53.8482" height="57.837" fill="white" transform="translate(0.328369 0.293945)"/>
                  </clipPath>
                  </defs>
                </svg>
                </div>
              </div>
              </div>

              <div className='row metric-rectangle gx-0'>
                <div className='row value-wrapper'>
              {value1 ? <pre className='metric-value'>
                <CountUp start={0} end={value1} duration={1.5} scrollSpyDelay={10} enableScrollSpy={true} scrollSpyOnce={true}>
                  {({countUpRef, start}) => (
                    <span ref={countUpRef} ></span>
                  )}
                </CountUp>
                </pre> : <Loader />}
                </div>
                
                <div className='row title gx-0 metric-name'>
                  <span>{title1}</span>
                </div>
              </div>

            </div>

            <div className='col-4 metric-col d-flex justify-content-center'>

              <div className='row gx-0 circle-row'>
              <div className='circle'>
                <div className='metric-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="59" viewBox="0 0 55 59" fill="none">
                  <g clip-path="url(#clip0_15_53)">
                    <path d="M42.3826 7.52351C40.1512 7.52351 38.0111 8.47562 36.4332 10.1704C34.8553 11.8652 33.9689 14.1638 33.9689 16.5605C33.9689 17.0399 33.7916 17.4996 33.476 17.8386C33.1604 18.1775 32.7324 18.3679 32.2861 18.3679C31.8398 18.3679 31.4118 18.1775 31.0962 17.8386C30.7806 17.4996 30.6033 17.0399 30.6033 16.5605C30.6033 14.0582 31.2942 11.6121 32.5885 9.53155C33.8828 7.45097 35.7225 5.82935 37.8749 4.87176C40.0273 3.91417 42.3957 3.66362 44.6807 4.1518C46.9656 4.63997 49.0645 5.84494 50.7119 7.61434C52.3592 9.38373 53.4811 11.6381 53.9356 14.0923C54.3901 16.5465 54.1569 19.0904 53.2653 21.4022C52.3738 23.714 50.864 25.69 48.9269 27.0802C46.9898 28.4704 44.7124 29.2124 42.3826 29.2124H1.99648C1.55018 29.2124 1.12217 29.022 0.806589 28.683C0.491011 28.344 0.313721 27.8843 0.313721 27.405C0.313721 26.9256 0.491011 26.4659 0.806589 26.1269C1.12217 25.788 1.55018 25.5976 1.99648 25.5976H42.3826C44.6141 25.5976 46.7542 24.6455 48.3321 22.9507C49.91 21.2559 50.7964 18.9573 50.7964 16.5605C50.7964 14.1638 49.91 11.8652 48.3321 10.1704C46.7542 8.47562 44.6141 7.52351 42.3826 7.52351ZM18.824 11.1383C17.9315 11.1383 17.0754 11.5192 16.4443 12.1971C15.8131 12.875 15.4585 13.7944 15.4585 14.7531C15.4585 15.2325 15.2812 15.6922 14.9657 16.0312C14.6501 16.3701 14.2221 16.5605 13.7758 16.5605C13.3295 16.5605 12.9015 16.3701 12.5859 16.0312C12.2703 15.6922 12.093 15.2325 12.093 14.7531C12.093 13.3232 12.4878 11.9255 13.2274 10.7366C13.967 9.54766 15.0183 8.62102 16.2482 8.07383C17.4781 7.52664 18.8315 7.38347 20.1372 7.66242C21.4429 7.94138 22.6423 8.62994 23.5836 9.64102C24.525 10.6521 25.166 11.9403 25.4257 13.3427C25.6855 14.7451 25.5522 16.1987 25.0427 17.5198C24.5333 18.8408 23.6705 19.9699 22.5636 20.7643C21.4567 21.5587 20.1553 21.9828 18.824 21.9828H1.99648C1.55018 21.9828 1.12217 21.7923 0.806589 21.4534C0.491011 21.1144 0.313721 20.6547 0.313721 20.1754C0.313721 19.696 0.491011 19.2363 0.806589 18.8973C1.12217 18.5584 1.55018 18.3679 1.99648 18.3679H18.824C19.7166 18.3679 20.5727 17.9871 21.2038 17.3092C21.835 16.6313 22.1896 15.7118 22.1896 14.7531C22.1896 13.7944 21.835 12.875 21.2038 12.1971C20.5727 11.5192 19.7166 11.1383 18.824 11.1383ZM0.313721 34.6346C0.313721 34.1552 0.491011 33.6955 0.806589 33.3566C1.12217 33.0176 1.55018 32.8272 1.99648 32.8272H35.793C37.7899 32.8272 39.7419 33.4632 41.4023 34.6548C43.0627 35.8464 44.3568 37.5401 45.121 39.5216C45.8851 41.5032 46.0851 43.6837 45.6955 45.7873C45.3059 47.8909 44.3443 49.8232 42.9323 51.3398C41.5203 52.8564 39.7212 53.8893 37.7627 54.3077C35.8042 54.7261 33.7741 54.5114 31.9292 53.6906C30.0843 52.8698 28.5074 51.4798 27.398 49.6965C26.2886 47.9131 25.6964 45.8165 25.6964 43.6716C25.6964 43.1923 25.8737 42.7326 26.1893 42.3936C26.5049 42.0546 26.9329 41.8642 27.3792 41.8642C27.8255 41.8642 28.2535 42.0546 28.5691 42.3936C28.8847 42.7326 29.0619 43.1923 29.0619 43.6716C29.0619 45.1015 29.4567 46.4993 30.1963 47.6882C30.9359 48.8771 31.9872 49.8037 33.2171 50.3509C34.4471 50.8981 35.8004 51.0413 37.1061 50.7623C38.4118 50.4834 39.6112 49.7948 40.5525 48.7837C41.4939 47.7727 42.1349 46.4845 42.3947 45.0821C42.6544 43.6796 42.5211 42.226 42.0116 40.905C41.5022 39.5839 40.6394 38.4548 39.5325 37.6604C38.4256 36.866 37.1242 36.442 35.793 36.442H1.99648C1.55018 36.442 1.12217 36.2516 0.806589 35.9126C0.491011 35.5737 0.313721 35.114 0.313721 34.6346Z" fill="#3A4A01"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_15_53">
                      <rect width="53.8482" height="57.837" fill="white" transform="translate(0.313721 0.293945)"/>
                    </clipPath>
                  </defs>
                </svg>
                </div>
              </div>
              </div>

              <div className='row metric-rectangle gx-0'>
                <div className='row value-wrapper'>
              {value1 ? <pre className='metric-value'>
                <CountUp start={0} end={value2} duration={1.5} scrollSpyDelay={10} enableScrollSpy={true} scrollSpyOnce={true}>
                  {({countUpRef, start}) => (
                    <span ref={countUpRef} ></span>
                  )}
                </CountUp>
                </pre> : <Loader />}
                </div>
                
                <div className='row title gx-0 metric-name'>
                  <span>{title2}</span>
                </div>
              </div>

            </div>

            <div className='col-4 metric-col d-flex justify-content-center'>

              <div className='row gx-0 circle-row'>
              <div className='circle'>
                <div className='metric-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="59" viewBox="0 0 55 59" fill="none">
                  <g clip-path="url(#clip0_15_51)">
                    <path d="M9.27939 0.293945C5.97932 0.293945 3.29626 3.53598 3.29626 7.52357V50.9013C1.64154 50.9013 0.304688 52.5167 0.304688 54.5161C0.304688 56.5156 1.64154 58.1309 3.29626 58.1309H30.2204C31.8751 58.1309 33.2119 56.5156 33.2119 54.5161C33.2119 52.5167 31.8751 50.9013 30.2204 50.9013V34.6347H31.7162C33.7822 34.6347 35.4556 36.6567 35.4556 39.1532V42.768C35.4556 47.2639 38.4659 50.9013 42.1866 50.9013C45.9074 50.9013 48.9177 47.2639 48.9177 42.768V28.7945C51.956 27.6423 54.1529 24.2195 54.1529 20.1754V16.5606C54.1529 15.5665 53.4798 14.7532 52.6571 14.7532H51.1614V9.33097C51.1614 8.3369 50.4882 7.52357 49.6656 7.52357C48.8429 7.52357 48.1698 8.3369 48.1698 9.33097V14.7532H45.1782V9.33097C45.1782 8.3369 44.5051 7.52357 43.6824 7.52357C42.8597 7.52357 42.1866 8.3369 42.1866 9.33097V14.7532H40.6909C39.8682 14.7532 39.1951 15.5665 39.1951 16.5606V20.1754C39.1951 24.2195 41.392 27.6423 44.4303 28.7945V42.768C44.4303 44.2704 43.43 45.4791 42.1866 45.4791C40.9433 45.4791 39.943 44.2704 39.943 42.768V39.1532C39.943 33.6632 36.2596 29.2124 31.7162 29.2124H30.2204V7.52357C30.2204 3.53598 27.5373 0.293945 24.2372 0.293945H9.27939ZM20.5819 9.63597C21.1428 10.0878 21.3765 10.935 21.1709 11.7032L18.8337 20.1641H24.2372C24.8636 20.1641 25.4245 20.6386 25.6395 21.3389C25.8546 22.0393 25.6863 22.8413 25.2095 23.3384L14.739 34.1828C14.2248 34.7137 13.4863 34.7589 12.9347 34.3071C12.3831 33.8552 12.1401 33.008 12.3457 32.2398L14.6829 23.7789H9.27939C8.65303 23.7789 8.09211 23.3045 7.87709 22.6041C7.66208 21.9037 7.83035 21.1017 8.30713 20.6047L18.7776 9.76023C19.2918 9.22931 20.0303 9.18412 20.5819 9.63597Z" fill="#3A4A01"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_15_51">
                      <rect width="53.8482" height="57.837" fill="white" transform="translate(0.304688 0.293945)"/>
                    </clipPath>
                  </defs>
                </svg>
                </div>
              </div>
              </div>

              <div className='row metric-rectangle gx-0'>
                <div className='row value-wrapper'>
              {value1 ? <pre className='metric-value'>
                <CountUp start={0} end={value3} duration={1.5} scrollSpyDelay={10} enableScrollSpy={true} scrollSpyOnce={true}>
                  {({countUpRef, start}) => (
                    <span ref={countUpRef} ></span>
                  )}
                </CountUp>
                </pre> : <Loader />}
                </div>
                
                <div className='row title gx-0 metric-name'>
                  <span>{title3}</span>
                </div>
              </div>

            </div>
        
        </div>
      );
}

