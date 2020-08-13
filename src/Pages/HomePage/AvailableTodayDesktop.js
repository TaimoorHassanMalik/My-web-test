import React from 'react'

const AvailableToday = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">

                            <div className="columns is-mobile">
                                <div className="column is-4 ">
                                    <figure className='image is-5by4'>
                                        <img src={props.image_1} alt='' />
                                    </figure>
                                </div>
                                <div className="column" >
                                    <nav className="level is-mobile mb-1">
                                        <div className="level-left" >
                                            <div className="level-item">
                                                <p className="subtitle is-6">{props.name_1}</p>
                                            </div>
                                        </div>
                                        <div className="level-right">
                                            <div className="level-item">
                                                <span className="icon">
                                                    <i className="fas fa-heart" color='#037ffc'></i>
                                                </span>
                                            </div>
                                        </div>
                                    </nav>
                                    <p className="subtitle is-6">{props.type_1}</p>

                                    <nav className="level is-mobile mb-1">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <img alt='' src={require('../../assets/location.png')} />
                                            </div>
                                            <div className="level-item">
                                                <p className="subtitle is-6">649 3rd st,Dallas</p>
                                            </div>
                                        </div>
                                    </nav>
                                    <div className="buttons">
                                        <button className="button is-info is-small">{props.offer}</button>
                                    </div>
                                </div>
                            </div>
                            <nav className="level is-mobile">
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
                                <div className="level-right">
                                    <div className="level-item">
                                        <span className="icon">
                                            <i className="fas fa-star" color='orange'></i>
                                        </span>
                                        <p className="subtitle is-6">4.9(365)</p>
                                    </div>
                                </div>
                            </nav>
                        </article>
                    </div>

                    <div className="tile is-parent">
                        <article className="tile is-child box ">

                            <div className="columns is-mobile">
                                <div className="column is-4">
                                    <figure className='image is-5by4'>
                                        <img src={props.image_2} alt='' />
                                    </figure>
                                </div>
                                <div className="column" >
                                    <nav className="level is-mobile mb-1">
                                        <div className="level-left" >
                                            <div className="level-item">
                                                <p className="subtitle is-6">{props.name_2}</p>
                                            </div>
                                        </div>
                                        <div className="level-right">
                                            <div className="level-item">
                                                <span className="icon">
                                                    <i className="fas fa-heart" color='#037ffc'></i>
                                                </span>
                                            </div>
                                        </div>
                                    </nav>
                                    <p className="subtitle is-6">{props.type_2}</p>

                                    <nav className="level is-mobile mb-1">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <img alt='' src={require('../../assets/location.png')} />
                                            </div>
                                            <div className="level-item">
                                                <p className="subtitle is-6">649 3rd st,Dallas</p>
                                            </div>
                                        </div>
                                    </nav>
                                    <div className="buttons">
                                        <button className="button is-info is-small">{props.offer}</button>
                                    </div>
                                </div>
                            </div>
                            <nav className="level is-mobile">
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
                                <div className="level-right">
                                    <div className="level-item">
                                        <span className="icon">
                                            <i className="fas fa-star" color='orange'></i>
                                        </span>
                                        <p className="subtitle is-6">4.9(365)</p>
                                    </div>
                                </div>
                            </nav>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default AvailableToday