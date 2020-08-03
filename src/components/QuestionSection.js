import React from 'react'
import 'bulma/css/bulma.css'
const QuestionSection = (props) => {
    return (
        
            <section class="section" style={{ padding: 3, marginTop: 30 }}>
                <div class="container">
                    <h1 class="title is-5 has-text-weight-bold">{props.Question}</h1>
                    <h2 class="subtitle">
                        <div class="columns">
                            <div class="column has-text-weight-bold is-size-5">Ans
                            </div>
                            <div class="column">
                                <label class="radio">
                                    <input type="radio" name="answer" />
                                        Yes
                                    </label>
                            </div>
                            <div class="column">
                                <label class="radio">
                                    <input type="radio" name="answer" /> No
                                    </label>
                            </div>
                            <div class="column">
                            </div>
                            
                        </div>
                    </h2>
                </div>
            </section>
        
    )
}
export default QuestionSection