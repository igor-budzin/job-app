import React, {Component} from 'react';
import moment from 'moment-with-locales-es6';

export default class Post extends Component {

    render() {
        return (
			<div className="post">
				<div className="title"><a href="">{this.props.job.name}</a></div>
				<div className="more">
					<span className="money">{this.props.job.salary ? this.props.job.salary.from : ''} грн.</span>
					<span className="company">{this.props.job.employer.name}</span>
					<span className="city">Львів</span>
				</div>
				<div className="description">
					{this.props.job.snippet.requirement}
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
