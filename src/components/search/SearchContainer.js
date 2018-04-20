import React,{Component} from 'react';
import {Row, Col, Input, Form, Button} from 'antd';
import 'antd/lib/input/style';

const Search = Input.Search;

export default class SearchContainer extends Component {
	handleSubmit(event) {
		event.preventDefault();
		console.log("ddsds");
	}

    render() {
        return (
            <div className="search">
				<Form onSubmit={this.handleSubmit}>
					<Search className="search-input" onSearch={(value) => console.log("dsadasd")} placeholder="input search text" enterButton="Search" size="large" />
				</Form>
            </div>
        );
    }
}
