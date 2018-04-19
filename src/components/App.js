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
					<Col span={15}>
						<div className="posts">
							<div className="post">
								<div className="title">Гід-екскурсовод для пивної екскурсії</div>
								<div className="more">
									<span className="money">12 000 грн.</span>
									<span className="company">LvivBuddy</span>
									<span className="city">Львів</span>
								</div>
								<div className="description">
									Ти любиш пиво? розумієшся в його видах зокрема кравтових?
									Можеш розказати щось про історію пивоваріння у Львові англійською чи німецькою (інша мова як +)і
									 не маєш проблем зі спілкування цими мовами? Тоді це ідеальна робота для тебе! Надсилай резюме (англійською)
									і можливо регулярне цікаве спілкув...
								</div>
								<div className="time">3 дні тому</div>
							</div>

							<div className="post">
								<div className="title">Гід-екскурсовод для пивної екскурсії</div>
								<div className="more">
									<span className="money">12 000 грн.</span>
									<span className="company">LvivBuddy</span>
									<span className="city">Львів</span>
								</div>
								<div className="description">
									Ти любиш пиво? розумієшся в його видах зокрема кравтових?
									Можеш розказати щось про історію пивоваріння у Львові англійською чи німецькою (інша мова як +)і
									 не маєш проблем зі спілкування цими мовами? Тоді це ідеальна робота для тебе! Надсилай резюме (англійською)
									і можливо регулярне цікаве спілкув...
								</div>
								<div className="time">3 дні тому</div>
							</div>

							<div className="post">
								<div className="title">Гід-екскурсовод для пивної екскурсії</div>
								<div className="more">
									<span className="money">12 000 грн.</span>
									<span className="company">LvivBuddy</span>
									<span className="city">Львів</span>
								</div>
								<div className="description">
									Ти любиш пиво? розумієшся в його видах зокрема кравтових?
									Можеш розказати щось про історію пивоваріння у Львові англійською чи німецькою (інша мова як +)і
									 не маєш проблем зі спілкування цими мовами? Тоді це ідеальна робота для тебе! Надсилай резюме (англійською)
									і можливо регулярне цікаве спілкув...
								</div>
								<div className="time">3 дні тому</div>
							</div>
						</div>
					</Col>
					<Col span={9}></Col>
				</Row>
            </div>
        );
    }
}
