import React, {Component} from 'react';
import {Row, Col, Pagination} from 'antd';
import 'antd/lib/row/style';
import 'antd/lib/col/style';
import 'antd/lib/pagination/style';
import SearchContainer from './search/SearchContainer';
import PostContainer from './post/PostContainer';
import {scrollToTop} from '../lib/animation'

export default class App extends Component {
	constructor(props) {
	super(props);
		this.state = {
			jobs: [],
			availability: false,
			page: null,
			totalItems: 0
		};
	}

	_handlerJob = (data) => {
		this.setState({
			jobs: data.items,
			availability: !!data,
			totalItems: !!data ? (data.found >= 2000 ? 1999 : data.found) : 0 // обмеження api
		});
	}

	setPostsBlock = () => {
		if(this.state.jobs.length > 0) {
			return <PostContainer jobs={this.state.jobs} />
		}
		else {
			if(this.state.availability) {
				return <div className="empty-posts">Вакансій за даним запитом<br />не знайдено</div>
			}
			else {
				return <div className="empty-posts">Почніть набирати назву вакансії<br /> в полі вище</div>
			}
		}
	}

	onChangePage = (page) => {
		this.setState({
			currentPage: page
		}, () => {
			scrollToTop(200);
		});
	}

    render() {
        return (
            <div className="app">
				<Row>
					<Col span={24}>
						<SearchContainer handlerJob={this._handlerJob} page={this.state.currentPage} />
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={15}>
						{ this.setPostsBlock() }
						{
							this.state.jobs.length > 0 ?
							<Pagination
								className="pagination"
								total={this.state.totalItems - 10}
								onChange={this.onChangePage}
								hideOnSinglePage={true}
							/> : ''
						}
					</Col>
					<Col span={9}></Col>
				</Row>
            </div>
        );
    }
}
