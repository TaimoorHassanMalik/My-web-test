import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import 'bulma/css/bulma.css'

const Calander = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())

    const CalendarButton = ({ value, onClick }) => (
        <span className="icon" onClick={onClick}>
            <i className="fa fa-calendar" color='white'></i>
        </span>
        //    <button className="example-custom-input" onClick={onClick}>
        //    {value}
        //  </button>
    );

    return (
        <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            customInput={<CalendarButton />}
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
            // highlightDates={[subDays(new Date(), 1), addDays(new Date(), 2)]}
            // placeholderText="This highlights a week ago and a week from today"
        />
    )
}
export default Calander