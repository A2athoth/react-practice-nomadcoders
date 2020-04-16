import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movie: []
    };

    getMovies = async () => {
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        console.log(movies.data.data.movies);
    }

    componentDidMount() {
        this.getMovies();
    };

    render() {
        const { isLoading } = this.state;       // es6의 마법
        return (
            <div>
                {isLoading ? "Loading" : "We are ready"}
            </div>
        );
    }
}

export default App;
