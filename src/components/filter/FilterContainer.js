import React, {Component} from 'react';
import {Row, Col, Checkbox, Input} from 'antd';
import 'antd/lib/checkbox/style';

export default class FilterContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}

    render() {
        return (
			<div className="filters">
				<div className="filter">
					<h6>Тип зайнятості</h6>
					<div className="body">
						<Checkbox.Group style={{ width: '100%' }}>
							<Row><Checkbox value="full">Повна зайнятість</Checkbox></Row>
							<Row><Checkbox value="part">Часткова зайнятість</Checkbox></Row>
							<Row><Checkbox value="project">Проектна робота</Checkbox></Row>
							<Row><Checkbox value="volunteer">Волонтерство</Checkbox></Row>
							<Row><Checkbox value="probation">Стажування</Checkbox></Row>
						</Checkbox.Group>
					</div>
				</div>

				<div className="filter">
					<h6>Заробітня плата</h6>
					<div className="body">
						<Input.Group compact>
							<Input style={{ width: 125, textAlign: 'center' }} placeholder="Мінімальна" />
							<Input style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="-" disabled />
							<Input style={{ width: 125, textAlign: 'center', borderLeft: 0 }} placeholder="Максимальна" />
						</Input.Group>
					</div>
				</div>
			</div>
        );
    }
}
