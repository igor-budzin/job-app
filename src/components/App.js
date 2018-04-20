import React, {Component} from 'react';
import {Row, Col, Pagination} from 'antd';
import 'antd/lib/row/style';
import 'antd/lib/col/style';
import 'antd/lib/pagination/style';
import SearchContainer from './search/SearchContainer';
import PostContainer from './post/PostContainer';

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
					<Col span={15}>
						<PostContainer />
 						<Pagination className="pagination" defaultCurrent={6} total={100} />
					</Col>
					<Col span={9}></Col>
				</Row>
            </div>
        );
    }
}
