import React from 'react';
import PropTypes from 'prop-types'

const Date = ({day}) => {
    return (
        <div className="date">
            <h1>{day}</h1>
          </div>
    )
}

Date.propTypes = {
    day: PropTypes.string.isRequired
}

export default Date;