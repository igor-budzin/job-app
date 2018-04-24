import React,{Component} from 'react';
import axios from 'axios';
import {Row, Col, Input, Form, Select} from 'antd';
import 'antd/lib/input/style';

const Option = Select.Option;

export default class SearchContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			area: null,
			order: 'expiration_date_desc'
		};

		this.selectAfter = (
			<Select defaultValue="Місто" onChange={this.handleChange} style={{ width: 110 }}>
				<Option value="0">Будь яке</Option>
				<Option value="125">Львів</Option>
				<Option value="115">Київ</Option>
				<Option value="135">Харків</Option>
				<Option value="127">Одеса</Option>
				<Option value="133">Тернопіль</Option>
				<Option value="134">Ужгород</Option>
				<Option value="117">Дніпро</Option>
				<Option value="116">Вінниця</Option>
			</Select>
		);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		axios.get('https://api.hh.ru/vacancies', {
			params: {
				text: this.state.value,
				area: this.state.area,
				vacancy_search_order: this.state.order
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

	handleChange = (value) => {
		this.setState({area: value != 0 ? value : null});
	}

    render() {
        return (
            <div className="search">
				<Row gutter={24}>
					<Col span={15}>
						<Form onSubmit={this.handleSubmit}>
							<Input
								className="search-input"
								onChange={(event) => this.setState({value: event.target.value})}
								addonAfter={this.selectAfter}
								placeholder="Пошук ваканісії . . ."
								size="large"
							/>

						</Form>
					</Col>
					<Col span={9}>
						<Select defaultValue="Сортування" style={{ width: '100%' }} size="large">
							<Option value="expiration_date_asc">По даті (зростання)</Option>
							<Option value="expiration_date_desc">По даті (Спадання)</Option>
							<Option value="name_asc">По назві (abc)</Option>
							<Option value="name_desc">По назві (desc)</Option>
						</Select>
					</Col>
				</Row>
            </div>
        );
    }
}
