import React, {Component} from 'react';
import {Row, Col} from 'antd';
import 'antd/lib/row/style';
import 'antd/lib/col/style';
import SearchContainer from './search/SearchContainer';

export default class App extends Component {

    render() {
        return (
            <div className="app">
				<Row>
					<Col span={24}>
						<SearchContainer />
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={15}></Col>
					<Col span={9}></Col>
				</Row>
            </div>
        );
    }
}
