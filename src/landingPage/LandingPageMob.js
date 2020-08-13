
import React from 'react';
import 'bulma/css/bulma.css'
import TimeTabs from './components/TimeTabs'
import QuestionSection from './components/QuestionSection'

const LandingPageMob = (props) => {
    const clickHandler = () => {
        alert('You click on Button')
    }
    return (
        <div class="container">
            {/* <nav class="level"> */}
            <p class="level-item has-text-centered">
                <a class="link is-info" href='# '>Appointment details</a>
            </p>
            {/* </nav> */}

            <section class="section is-mobile" style={{ paddingTop: 3, paddingBottom: 3 }}>
                <article class="media">
                    <figure class="media-left">
                        <h1 class="title">Fav Street Food</h1>
                    </figure>
                    <div class="media-content">
                        <nav class="level is-mobile">
                            <div class="level-left">
                            </div>
                        </nav>
                    </div>
                    <div class="media-right">
                        <span class="icon">
                            <i class="fas fa-heart" color='#037ffc'></i>
                        </span>
                    </div>
                </article>
            </section>

            <div className="buttons is-centered" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 15 }}>
                <button className="button is-info is-large" onClick={clickHandler}>25% off entire order today</button>
            </div>

            <section class="section" style={{ paddingTop: 3, paddingBottom: 3 }}>
                <div class="container">
                    <h1 class="title is-6 has-text-weight-bold"> No of guests</h1>
                    <h2 class="subtitle">
                        <article class="media">
                            <figure class="media-left">
                                <div className="select is-size-6" style={{ marginTop: 20 }}>
                                    <select>
                                        <option>Adult</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </figure>
                            <div class="media-content">

                                <nav class="level is-mobile">
                                    <div class="level-left">

                                    </div>
                                </nav>
                            </div>
                            <div class="media-right">
                                <div className="select is-size-6" style={{ marginTop: 20 }}>
                                    <select>
                                        <option>Children</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </article>
                    </h2>
                </div>
            </section>

            <section class="section" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 10 }}>
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p style={{ fontWeight: 'bold', color: 'green' }}>Open</p>
                            <p style={{ fontWeight: 'bold' }}>. Closes</p>
                        </div>
                        <div class="level-item">
                            <div class="field has-addons">

                                <p class="control">
                                    <div className="select is-size-7" style={{ paddingLeft: 10 }}>
                                        <select>
                                            <option>12 PM</option>
                                            <option>24 Hours</option>
                                        </select>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="level-right">
                        <p class='pr-2'>Mon 06-06-2020 </p>
                        <img alt='' src={require('./assets/cal.png')} />
                    </div>
                </nav>
            </section>

            <section class="section" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 20 }}>
                <div class="container">
                    <h1 class="title is-6 has-text-weight-bold">Slots available</h1>
                    <h2 class="subtitle" style={{ marginTop: 20 }}>
                        <TimeTabs />
                    </h2>
                </div>
            </section>


            <nav class="level" style={{ marginTop: 20 }}>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href='# ' onClick={clickHandler}>For another day ></a>
                </p>
            </nav>


            <section class="section" style={{ paddingTop: 3, paddingBottom: 3 }}>
                <div class="container">
                    <h1 class="title is-6 has-text-weight-bold">Special Instructions</h1>
                    <h2 class="subtitle is-6 has-text-justified">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </h2>
                </div>
            </section>

            <QuestionSection Question='Q.1: Have you had any fever in the last 24 hours ?' />
            <QuestionSection Question='Q.2: Do you have cough or flu like symtomns ?' />

            <div className="buttons is-centered" style={{ marginTop: 30 }}>
                <button className="button is-info is-large" onClick={clickHandler}>Confirm Appointment</button>
            </div>

            <section class="section" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 20 }}>
                <div class="container">
                    <h2 class="subtitle is-6 has-text-justified">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </h2>
                </div>
            </section>

            <section class="section" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 30 }}>
                <div class="container">
                    <h1 class="title is-6 has-text-weight-bold">Personal Safety Standards</h1>
                    <h2 class="subtitle" style={{ marginTop: 10 }}>
                        <div class="columns">
                            <div class="column is-size-6">
                                <span class="icon is-size-7">
                                    <i class="fas fa-check" color='#037ffc'></i>
                                </span>
              Staff wears masks
              </div>
                            <div class="column is-size-6">
                                <span class="icon is-size-7">
                                    <i class="fas fa-check" color='#037ffc'></i>
                                </span>
              Sanitizing between visits
              </div>
                            <div class="column is-size-6">
                                <span class="icon is-size-7">
                                    <i class="fas fa-check" color='#037ffc'></i>
                                </span>
              Mask required
              </div>
                            <div class="column is-size-6">
                                <span class="icon is-size-7">
                                    <i class="fas fa-check" color='#037ffc'></i>
                                </span>
              Social distance btw tables
              </div>
                        </div>
                    </h2>
                </div>
            </section>

            <section class="section" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 40 }}>
                <div className='SectionHelper'>
                    <div className='SubSection'>
                        <img alt='' src={require('./assets/call.png')} />
                        <p style={{ fontSize: 15, fontWeight: 'bold', color: '#037ffc', paddingLeft: 10 }} onClick={clickHandler}>Call (+1) 32456778</p>
                    </div>
                    <span class="icon">
                        <i class="fas fa-chevron-right" color='#037ffc'></i>
                    </span>
                </div>

                <div className='SectionHelper' style={{ marginTop: 20 }}>
                    <div className='SubSection'>
                        <img alt='' src={require('./assets/visit.png')} />
                        <p style={{ fontSize: 15, fontWeight: 'bold', color: '#037ffc', paddingLeft: 10 }} onClick={clickHandler}>Visit Website</p>
                    </div>
                    <span class="icon">
                        <i class="fas fa-chevron-right" color='#037ffc'></i>
                    </span>
                </div>
                <nav class="level" style={{ marginTop: 30, marginBottom: 10 }}>
                    <p class="level-item has-text-centered">
                        <a class="link is-info" href='# ' onClick={clickHandler}>More ></a>
                    </p>
                </nav>
            </section>
        </div>
    )
}

export default LandingPageMob