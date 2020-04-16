import React from 'react';
import PropTypes from 'prop-types';

// 컴포넌트가 state가 필요없으면 굳이 클래스 컴포넌트여야 할 이유가 없다.
function Movie({year, title, summary, poster}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
