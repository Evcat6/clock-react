import React from 'react';
import Date from './Date';
import PropTypes from 'prop-types';

const ClockTable = ({day, clock}) => {
    return (
        <div className="overlay" >
        <div className="clock-table">
        <h1>{clock}</h1>
        <Date day={day} />
      </div>
      </div>
    )
}

ClockTable.propTypes = {
    day: PropTypes.string.isRequired,
    clock: PropTypes.number.isRequired
}

export default ClockTable;