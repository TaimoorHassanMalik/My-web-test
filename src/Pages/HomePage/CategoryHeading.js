import React from 'react'
import 'bulma/css/bulma.css'

const CategoryHeading = (props) => {
    return (
        <section className="section" style={{ paddingTop: 3, paddingBottom: 3, marginTop: 10 }}>
            <div className="container">
                <nav className="level is-mobile">
                    <div className="level-left">
                        <div className="level-item">
                            <p className="subtitle is-6" style={{ fontSize: 14 }}>{props.CategoryName}</p>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <p className="subtitle is-6" style={{ color: 'orange' }} onClick={props.onPress}>{props.ViewAll}</p>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default CategoryHeading