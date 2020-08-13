import React from 'react'
import 'bulma/css/bulma.css'
import Calander from './Calander';
import "react-datepicker/dist/react-datepicker.css";
import CategoryHeading from './CategoryHeading';
import AvailableTodayMobile from './AvailableTodayMobile'
import styled from 'styled-components';

const AppointmentSection = styled.section`
    height:510;
    display: flex;
    overflow:auto
`;

const AppointmentItem = styled.section`
    min-width:260px;
    height:270px;
    margin-right:2px;
`;

const HomePageMobile = (props) => {

    const viewAll = () => {
        alert('Button Press')
    }

    return (
        <div>

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



            <AppointmentSection>
                <AppointmentItem>
                    <section className="section py-0 px-1">
                        <div className="container">
                            <div className='columns is-mobile py-0 px-0 pl-4'>
                                <div className='column'>
                                    <div className="tile is-ancestor">

                                        <div className="tile is-parent">
                                            <article className="tile is-child box px-0 py-0">
                                                <figure className='image is-16by9'>
                                                    <img src={require('../../assets/hair1.png')} alt='' />
                                                </figure>
                                                <nav className="level is-mobile mb-1 mt-1 px-2">
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
                                                <p className="subtitle is-6 mb-0 px-2">Women</p>

                                                <nav className="level is-mobile mb-0 px-2">
                                                    <div className="level-left">
                                                    </div>
                                                    <div className="level-right">
                                                        <p className="subtitle is-6">4 ml</p>
                                                    </div>
                                                </nav>

                                                <nav className="level is-mobile mb-1 px-2">
                                                    <div className="level-left">
                                                        <div className="level-item">
                                                            <img alt='' src={require('../../assets/location.png')} />
                                                        </div>
                                                        <div className="level-item">
                                                            <p className="subtitle is-6" style={{ fontSize: 12 }}>5922 Tony Highway Dallas</p>
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

                                                <nav className="level is-mobile px-2 pb-2">
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
                                            </article>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </AppointmentItem>

                <AppointmentItem>
                    <section className="section py-0 px-1">
                        <div className="container">
                            <div className='columns is-mobile py-0 px-0 pl-4'>
                                <div className='column'>
                                    <div className="tile is-ancestor">

                                        <div className="tile is-parent">
                                            <article className="tile is-child box px-0 py-0">
                                                <figure className='image is-16by9'>
                                                    <img src={require('../../assets/gym2.png')} alt='' />
                                                </figure>
                                                <nav className="level is-mobile mb-1 mt-1 px-2">
                                                    <div className="level-left">
                                                        <div className="level-item">
                                                            <p className="subtitle is-5">
                                                                <strong>Body Gain</strong>
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
                                                <p className="subtitle is-6 mb-0 px-2">Men</p>

                                                <nav className="level is-mobile mb-0 px-2">
                                                    <div className="level-left">
                                                    </div>
                                                    <div className="level-right">
                                                        <p className="subtitle is-6">4 ml</p>
                                                    </div>
                                                </nav>

                                                <nav className="level is-mobile mb-1 px-2">
                                                    <div className="level-left">
                                                        <div className="level-item">
                                                            <img alt='' src={require('../../assets/location.png')} />
                                                        </div>
                                                        <div className="level-item">
                                                            <p className="subtitle is-6" style={{ fontSize: 12 }}>5922 Tony Highway Dallas</p>
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

                                                <nav className="level is-mobile px-2 pb-2">
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
                                            </article>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </AppointmentItem>

            </AppointmentSection>


            <section className="section py-0">
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
            <AvailableTodayMobile name_1='Foody Magic' name_2='Tasty Rice' type_1='Italian' type_2='Chinese' offer='20% off entire order today' image_1={require('../../assets/taste.png')} image_2={require('../../assets/taste.png')} />

            <CategoryHeading CategoryName='Hair Salon' onPress={viewAll} ViewAll='View all' />
            <AvailableTodayMobile name_1='Sana Salon' name_2='Tariq Salon' type_1='Woman' type_2='Men' offer='40% off entire order today' image_1={require('../../assets/hair1.png')} image_2={require('../../assets/hair.png')} />

            <CategoryHeading CategoryName='Gym' onPress={viewAll} ViewAll='View all' />
            <AvailableTodayMobile name_1='24 Hours Gym' name_2='24 Hours Gym' type_1='Gym' type_2='Gym' offer='25% off entire order today' image_1={require('../../assets/gym1.png')} image_2={require('../../assets/gym2.png')} />

            {/* {
        persons.map(item => {
          return <AvailableToday name={item.firstname} last={item.lastname} CategoryName='Restaurants' onPress={viewAll} ViewAll='View all' />
        })
      } */}
        </div>
    )
}
export default HomePageMobile