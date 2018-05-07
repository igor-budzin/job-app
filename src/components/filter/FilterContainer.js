import React, {Component} from 'react';
import {Row, Col, Checkbox, Slider} from 'antd';
import 'antd/lib/checkbox/style';
import 'antd/lib/slider/style';

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
					<h6>Заробітня плата від:</h6>
					<div className="body">
						<Slider defaultValue={30} step={1000} min={0} max={50000} disabled={false} />
					</div>
				</div>
			</div>
        );
    }
}
