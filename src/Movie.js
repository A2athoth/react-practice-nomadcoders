import React from 'react';
import PropTypes from 'prop-types';

// 컴포넌트가 state가 필요없으면 굳이 클래스 컴포넌트여야 할 이유가 없다.
function Movie({id, year, title, summary, poster}) {
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
