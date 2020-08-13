import React, { useState } from 'react'
import Button from 'react-bulma-components/lib/components/button';
// import 'react-bulma-components/dist/react-bulma-components.min.css';
// import { Button } from 'react-bulma-components';
import './App.scss'
import 'bulma/css/bulma.css'
// import WeekCalendar from 'react-week-calendar';
// import ReactList from 'react-list';
import 'react-week-calendar/dist/style.less';
import AvailableToday from './AvailableToday';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Calander from './Calander';
import CategoryHeading from './CategoryHeading';

const App = () => {


  const persons = [
    {
      id: 'a',
      firstname: 'Robin',
      lastname: 'Wieruch',
      year: 1988,
    },
    // {
    //   id: 'b',
    //   firstname: 'Dave',
    //   lastname: 'Davidds',
    //   year: 1990,
    // },
  ];



  const viewAll = () => {
    alert('Button Press')
  }


  return (
    <div>
      <Button color='primary'>Press Me!</Button>
      <section className="section" style={{ paddingTop: 3, paddingBottom: 3 }}>
        <div className="container">
          <nav className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
              </div>
            </div>
            <div className="level-centered">
              <p className="level-item"><strong>Home</strong></p>
            </div>
            <div className="level-right">
              <div className="level-item">
                <span className="icon">
                  <i className="fa fa-bell" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 3, paddingBottom: 3 }}>
        <div className="container">
          <section className="hero is-info">
            <div className="hero-body" style={{ paddingTop: 3, paddingBottom: 3 }}>
              <div className="container">
                <h2 className="subtitle">
                  {/* <span className="icon">
                    <i className="fa fa-calendar" color='white'></i>
                  </span> */}
                  <Calander />
                </h2>
                <h2 className="subtitle">
                  Days Name
                </h2>
                <h2 className="subtitle">
                  Days Number
                </h2>
              </div>
            </div>
          </section>
        </div>
      </section>


      <section className="section" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 10 }}>
        <div className="container">
          <nav className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <p className="subtitle is-6">16-10-2020</p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <span className="icon">
                  <i className="fas fa-plus-square" color='#037ffc'></i>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </section>


      <section className="section" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 10 }}>
        <div className="container">
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-16by9'>
                <img src={require('../src/assets/gg.png')} alt='' />
              </figure>
            </div>

            <div className='card-content'>
              <nav className="level is-mobile">
                <div className="level-left">
                  <div className="level-item">
                    <p className="subtitle is-5">
                      <strong>Salon</strong>
                    </p>
                  </div>
                </div>
                <div className="level-right">
                  <span className="icon">
                    <i className="fas fa-star" color='orange'></i>
                  </span>
                  <p className="subtitle is-6">4.9(365)</p>
                </div>
              </nav>

              <nav className="level is-mobile">
                <div className="level-left">
                  <div className="level-item">
                    <p className="subtitle is-6">Chinese</p>
                  </div>
                </div>
              </nav>

              <nav className="level is-mobile" style={{ marginTop: -20 }}>
                <div className="level-left">
                </div>
                <div className="level-right">
                  <p className="subtitle is-6">4 ml</p>
                </div>
              </nav>

              <nav className="level is-mobile" style={{ marginTop: -20 }}>
                <div className="level-left">
                  <div className="level-item">
                    <img alt='' src={require('../src/assets/location.png')} />
                  </div>
                  <div className="level-item">
                    <p className="subtitle is-6">5922 Tony Highway Dallas</p>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <span className="icon" >
                      <i className="fa fa-share" color='#037ffc'></i>
                    </span>
                  </div>
                </div>
              </nav>

              <nav className="level is-mobile" style={{ marginTop: -10 }}>
                <div className="level-left">
                  <div className="level-item">
                    <span className="icon">
                      <i className="fa fa-clock-o" color='#037ffc'></i>
                    </span>
                  </div>
                  <div className="level-item">
                    <p className="subtitle is-6" style={{ color: '#037ffc' }}>03:00 pm (in 4 hrs)</p>
                  </div>
                </div>
              </nav>

            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 10 }}>
        <div className="container">
          <nav className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <p className="title is-6 has-text-weight-bold">Available today</p>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <CategoryHeading CategoryName='Restaurants' onPress={viewAll} ViewAll='View all' />
      <AvailableToday name_1='Foody Magic' name_2='Tasty Rice' type_1='Italian' type_2='Chinese' offer='20% off entire order today' image_1={require('../src/assets/h.png')} image_2={require('../src/assets/taste.png')} />

      <CategoryHeading CategoryName='Hair Salon' onPress={viewAll} ViewAll='View all' />
      <AvailableToday name_1='Sana Salon' name_2='Tariq Salon' type_1='Woman' type_2='Men' offer='40% off entire order today' image_1={require('../src/assets/hair1.png')} image_2={require('../src/assets/hair.png')} />

      <CategoryHeading CategoryName='Gym' onPress={viewAll} ViewAll='View all' />
      <AvailableToday name_1='24 Hours Gym' name_2='24 Hours Gym' type_1='Gym' type_2='Gym' offer='25% off entire order today' image_1={require('../src/assets/gym1.png')} image_2={require('../src/assets/gym2.png')} />

      {/* {
        persons.map(item => {
          return <AvailableToday name={item.firstname} last={item.lastname} CategoryName='Restaurants' onPress={viewAll} ViewAll='View all' />
        })
      } */}

    </div>
  )
}
export default App