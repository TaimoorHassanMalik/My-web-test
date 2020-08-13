import React from 'react'
import 'bulma/css/bulma.css'
import styled from 'styled-components';

const AppointmentSection = styled.section`
    height:1;
    display: flex;
    overflow:auto
    `;
const AppointmentItem = styled.section`
    min-width:280px;
    height:110px;
    margin-right:2px;
    `;
const OfferButton = styled.p`
    background:#037ffc;
    text-align: center;
    `;

const AvailableTodayMobile = (props) => {
    return (
        <AppointmentSection>

            <AppointmentItem>
                <section className="section py-0 px-1">
                    <div className="container">
                        <div className='columns is-mobile py-0 px-0 pl-4'>
                            <div className='column'>
                                <div className="tile is-ancestor">

                                    <div className="tile is-parent">
                                        <article className="tile is-child box px-0 py-0">

                                            <nav className='level is-mobile mb-1 mt-1 px-2'>
                                                <div className="level-left px-0 py-0">
                                                    <div className="level-item px-0 py-0">
                                                        <figure className='image'>
                                                            <img src={props.image_1} alt='' />
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className='column px-0 py-0'>
                                                    <nav className='level is-mobile mb-0'>
                                                        <div className="level-left">
                                                            <div className="level-item">
                                                                <p className="subtitle is-6" style={{ fontSize: 12 }}>
                                                                    <strong>{props.name_1}</strong>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="level-right">
                                                            <span className="icon">
                                                                <i className="fas fa-heart" color='#037ffc'></i>
                                                            </span>
                                                        </div>
                                                    </nav>

                                                    <p className="subtitle is-6 mb-0">{props.type_1}</p>

                                                    <nav className='level is-mobile mb-0'>
                                                        <div className="level-left">
                                                            <div className="level-item">
                                                                <img alt='' src={require('../../assets/location.png')} />
                                                            </div>
                                                            <div className="level-item">
                                                                <p className="subtitle is-6" style={{ fontSize: 10 }}>649 3rd st,Dallas</p>
                                                            </div>
                                                        </div>
                                                    </nav>
                                                    <OfferButton>
                                                        <p className="subtitle is-6 mb-0" style={{ fontSize: 8, color: 'white' }}>{props.offer}</p>
                                                    </OfferButton>
                                                </div>
                                            </nav>

                                            <nav className="level is-mobile mx-0">
                                                <div className="level-left">
                                                    <div className="level-item py-0 px-0">
                                                        <span className="icon">
                                                            <i className="fa fa-clock-o" color='#037ffc'></i>
                                                        </span>
                                                    </div>
                                                    <div className="level-item">
                                                        <p className="subtitle is-6" style={{ color: '#037ffc' }}>03:00 pm (in 4 hrs)</p>
                                                    </div>
                                                </div>
                                                <div className="level-right">
                                                    <div className="level-item">
                                                        <span className="icon">
                                                            <i className="fas fa-star" color='orange' size={5}></i>
                                                        </span>
                                                        <p className="subtitle is-6" style={{ fontSize: 10 }}>4.9(365)</p>
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

                                            <nav className='level is-mobile mb-1 mt-1 px-2'>
                                                <div className="level-left px-0 py-0">
                                                    <div className="level-item px-0 py-0">
                                                        <figure className='image'>
                                                            <img src={props.image_2} alt='' />
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className='column px-0 py-0'>
                                                    <nav className='level is-mobile mb-0'>
                                                        <div className="level-left">
                                                            <div className="level-item">
                                                                <p className="subtitle is-6" style={{ fontSize: 12 }}>
                                                                    <strong>{props.name_2}</strong>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="level-right">
                                                            <span className="icon">
                                                                <i className="fas fa-heart" color='orange'></i>
                                                            </span>
                                                        </div>
                                                    </nav>

                                                    <p className="subtitle is-6 mb-0">{props.type_2}</p>

                                                    <nav className='level is-mobile mb-0'>
                                                        <div className="level-left">
                                                            <div className="level-item">
                                                                <img alt='' src={require('../../assets/location.png')} />
                                                            </div>
                                                            <div className="level-item">
                                                                <p className="subtitle is-6" style={{ fontSize: 10 }}>649 3rd st,Dallas</p>
                                                            </div>
                                                        </div>
                                                    </nav>
                                                    <OfferButton>
                                                        <p className="subtitle is-6 mb-0" style={{ fontSize: 8, color: 'white' }}>{props.offer}</p>
                                                    </OfferButton>
                                                </div>
                                            </nav>

                                            <nav className="level is-mobile mx-0">
                                                <div className="level-left">
                                                    <div className="level-item py-0 px-0">
                                                        <span className="icon">
                                                            <i className="fa fa-clock-o" color='#037ffc'></i>
                                                        </span>
                                                    </div>
                                                    <div className="level-item">
                                                        <p className="subtitle is-6" style={{ color: '#037ffc' }}>03:00 pm (in 4 hrs)</p>
                                                    </div>
                                                </div>
                                                <div className="level-right">
                                                    <div className="level-item">
                                                        <span className="icon">
                                                            <i className="fas fa-star" color='orange'></i>
                                                        </span>
                                                        <p className="subtitle is-6" style={{ fontSize: 10 }}>4.9(365)</p>
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
    )
}
export default AvailableTodayMobile