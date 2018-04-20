import React,{Component} from 'react';
import axios from 'axios';
import {Row, Col, Input, Form, Select} from 'antd';
import 'antd/lib/input/style';

const Search = Input.Search;
const Option = Select.Option;

export default class SearchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.selectBefore = (
			<Select defaultValue="Львів" style={{ width: 110 }}>
				<Option value="Львів">Львів</Option>
				<Option value="Київ">Київ</Option>
				<Option value="Харків">Харків</Option>
				<Option value="Одеса">Одеса</Option>
				<Option value="Тернопіль">Тернопіль</Option>
				<Option value="Ужгород">Ужгород</Option>
				<Option value="Дніпро">Дніпро</Option>
			</Select>
		);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		axios.get('https://api.hh.ru/vacancies', {
			params: {
				text: this.state.value
			}
		})
		.then(function (response) {
			this.props.handlerJob(response.data.items)
			// console.log(response);
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		});
	}

    render() {
        return (
            <div className="search">
				<Form onSubmit={this.handleSubmit}>
					<Search
						className="search-input"
						onChange={(event) => this.setState({value: event.target.value})}
						addonBefore={this.selectBefore}
						placeholder="input search text"
						enterButton="Search"
						size="large"
					/>
				</Form>
            </div>
        );
    }
}
