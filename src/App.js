import React, { Component } from 'react';
import axios from "axios";
const axiosGithubGraphQL = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: {
        Authorization: "bearer 85f2ad5d40480d165ac790d19800a370151b3b72",
    }
})

const TITLE = 'React GraphQL GitHub Client';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: 'the-road-to-learn-react/the-road-to-learn-react',
        };
    }

    componentDidMount() {
        // fetch data
    }

    onChange = event => {
        this.setState({ path: event.target.value });
        //the path in the state is set according to user input
    };

    onSubmit = event => {
        // fetch data
        event.preventDefault();
    };

    render() {
        const { path } = this.state;
        return (
            <div>
                <h1>{TITLE}</h1>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="url">
                        Show open issues for https://github.com/
                    </label>
                    <input
                        id="url"
                        type="text"
                        value = {path}
                        onChange={this.onChange}
                        style={{ width: '300px' }}
                    />
                    <button type="submit">Search</button>
                </form>
                <hr />
            </div>
        );
    }
}
export default App;