import React, {Component} from 'react';
import SearchContainer from './search/SearchContainer';

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <SearchContainer />
            </div>
        );
    }
}
