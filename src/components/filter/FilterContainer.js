import React, {Component} from 'react';
import {Row, Col, Checkbox} from 'antd';
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
							<Row><Checkbox value="A">Повна зайнятість</Checkbox></Row>
							<Row><Checkbox value="B">Часткова зайнятість</Checkbox></Row>
							<Row><Checkbox value="C">Проектна робота</Checkbox></Row>
							<Row><Checkbox value="D">Волонтерство</Checkbox></Row>
							<Row><Checkbox value="E">Стажування</Checkbox></Row>
						</Checkbox.Group>
					</div>
				</div>
			</div>
        );
    }
}
