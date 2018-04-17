import React, {Component} from 'react';
import {Row, Col} from 'antd';
import SearchContainer from './search/SearchContainer';

export default class App extends Component {

    render() {
        return (
            <div className="app wrapper">
				<Row>
					<Col span={12}>
						<SearchContainer />
					</Col>
				</Row>
            </div>
        );
    }
}
