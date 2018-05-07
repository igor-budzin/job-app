import React, {Component} from 'react';
import moment from 'moment-with-locales-es6';
import {Icon} from 'antd';

export default class Post extends Component {
	parseMoney = () => {
		if(this.props.job.salary !== null && this.props.job.salary.from !== null) {
			const money = +this.props.job.salary.from;
			return money.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' грн.';
		}
	}

    render() {
        return (
			<div className="post" data-id={this.props.job.id}>
				<div className="title"><a href="">{this.props.job.name}</a></div>
				<div className="more">
					<span className="money">{this.parseMoney()}</span>
					<span className="company">{this.props.job.employer.name}</span>
					<span className="city">{this.props.job.area.name}</span>
				</div>
				<div className="description">
					{this.props.job.snippet.requirement}
				</div>
				<div className="save">
					<Icon type="star-o" />
				</div>
				<div className="time">
					{
						moment(this.props.job.published_at).locale('uk').startOf('day').fromNow()
					}
				</div>
			</div>
        );
    }
}
