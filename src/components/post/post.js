import React, {Component} from 'react';

export default class Post extends Component {

    render() {
        return (
			<div className="post">
				<div className="title"><a href="">Гід-екскурсовод для пивної екскурсії</a></div>
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
        );
    }
}
