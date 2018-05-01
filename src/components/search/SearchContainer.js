import React,{Component} from 'react';
import axios from 'axios';
import {Row, Col, Input, Form, Select} from 'antd';
import {getVacancies} from '../../lib/request';
import 'antd/lib/input/style';

const Option = Select.Option;

export default class SearchContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			area: null,
			order: 'publication_time',
			page: 0
		};

		this.selectAfter = (
			<Select defaultValue="Місто" onChange={this.handleCityChange} style={{ width: 110 }}>
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
		getVacancies(this.state.text, this.state.area, this.state.order, this.state.page)
		.then(function (response) {
			this.props.handlerJob(response.data)
			// console.log(response);
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		});
	}

	handleCityChange = (value) => {
		this.setState({area: value != 0 ? value : null});
	}

	handleSortChange = (value) => {
		this.setState({order: value}, () => {
			if(this.state.text.length !== 0) {
				getVacancies(this.state.text, this.state.area, this.state.order, this.state.page)
				.then(function (response) {
					this.props.handlerJob(response.data)
					// console.log(response);
				}.bind(this))
				.catch(function (error) {
					console.log(error);
				});
			}
		});
	}

	componentWillReceiveProps = (nextProps) => {
		if(this.props.page !== nextProps.page) {
			this.setState({
				page: nextProps.page
			}, () => {
				getVacancies(this.state.text, this.state.area, this.state.order, this.state.page)
				.then(function (response) {
					this.props.handlerJob(response.data)
					// console.log(response);
				}.bind(this))
				.catch(function (error) {
					console.log(error);
				});
			});
		}
	}

    render() {
        return (
            <div className="search">
				<Row gutter={24}>
					<Col span={15}>
						<Form onSubmit={this.handleSubmit}>
							<Input
								className="search-input"
								onChange={(event) => this.setState({text: event.target.value})}
								addonAfter={this.selectAfter}
								placeholder="Пошук ваканісії . . ."
								size="large"
							/>

						</Form>
					</Col>
					<Col span={9}>
						<Select defaultValue="Сортування" onChange={this.handleSortChange} style={{ width: '100%' }} size="large">
							<Option value="publication_time">По даті</Option>
							<Option value="relevance">По відповідності</Option>
							<Option value="salary_asc">По зарплаті (abc)</Option>
							<Option value="salary_desc">По зарплаті (desc)</Option>
						</Select>
					</Col>
				</Row>
            </div>
        );
    }
}
