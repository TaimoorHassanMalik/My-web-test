import React from 'react';
import '../App.css'
import 'bulma/css/bulma.css'

class TimeTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickTab: true,
            T1: false,
            T2: false,
            T3: false,
            T4: false,
            T5: false,
            T6: true,
            T7: false,
            T8: false,
            T9: false,
            T10: false,
            TimeValue: ''
        }
    }

    T1 = () => {
        this.setState({ T1: true, T2: false, T3: false, T4: false, T5: false, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '11:00' })
    }
    T2 = () => {
        this.setState({ T1: false, T2: true, T3: false, T4: false, T5: false, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '12:00' })
    }
    T3 = () => {
        this.setState({ T1: false, T2: false, T3: true, T4: false, T5: false, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '01:00' })
    }
    T4 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: true, T5: false, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '02:00' })
    }
    T5 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: true, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '03:00' })
    }
    T6 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: true, T7: false, T8: false, T9: false, T10: false, TimeValue: '04:00' })
    }
    T7 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: false, T7: true, T8: false, T9: false, T10: false, TimeValue: '05:00' })
    }
    T8 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: false, T7: false, T8: true, T9: false, T10: false, TimeValue: '06:00' })
    }
    T9 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: false, T7: false, T8: false, T9: true, T10: false, TimeValue: '07:00' })
    }
    T10 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: false, T7: false, T8: false, T9: false, T10: true, TimeValue: '08:00' })
    }

    render() {
        return (
            <div>
                <div className='SectionHelper'>
                    <div onClick={this.T1} style={{ backgroundColor: this.state.T1 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T1 ? 'white' : 'black', textAlign: 'center' }}>11:00 am</p>
                    </div>
                    <div onClick={this.T2} style={{ backgroundColor: this.state.T2 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T2 ? 'white' : 'black', textAlign: 'center' }}>12:00 pm</p>
                    </div>
                    <div onClick={this.T3} style={{ backgroundColor: this.state.T3 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T3 ? 'white' : 'black', textAlign: 'center' }}>01:00 pm</p>
                    </div>
                    <div onClick={this.T4} style={{ backgroundColor: this.state.T4 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T4 ? 'white' : 'black', textAlign: 'center' }}>02:00 pm</p>
                    </div>
                    <div onClick={this.T5} style={{ backgroundColor: this.state.T5 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T5 ? 'white' : 'black', textAlign: 'center' }}>03:00 pm</p>
                    </div>
                </div>

                <div className='SectionHelper' style={{ marginTop: 10 }}>
                    <div onClick={this.T6} className='mid' style={{ backgroundColor: this.state.T6 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T6 ? 'white' : 'black', textAlign: 'center' }}>04:00 pm</p>
                    </div>
                    <div onClick={this.T7} style={{ backgroundColor: this.state.T7 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T7 ? 'white' : 'black', textAlign: 'center' }}>05:00 pm</p>
                    </div>
                    <div onClick={this.T8} style={{ backgroundColor: this.state.T8 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T8 ? 'white' : 'black', textAlign: 'center' }}>06:00 pm</p>
                    </div>
                    <div onClick={this.T9} style={{ backgroundColor: this.state.T9 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T9 ? 'white' : 'black', textAlign: 'center' }}>07:00 pm</p>
                    </div>
                    <div onClick={this.T10} style={{ backgroundColor: this.state.T10 ? '#3ec0f0' : 'white', borderRadius: 3, width: 60, height: 20 }}>
                        <p style={{ fontSize: 12, color: this.state.T10 ? 'white' : 'black', textAlign: 'center' }}>08:00 pm</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default TimeTabs
