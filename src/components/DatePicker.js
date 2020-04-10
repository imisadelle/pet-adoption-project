import React, { Component } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


//calendar with exclude dates
() => {
    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 16)
    );
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 30), 17)
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    );
  };

//include times
//Calendar with container
//calendar with custom header
//https://reactdatepicker.com/



export default DatePicker;
