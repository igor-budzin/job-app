import React,{Component} from 'react';
import Post from './post';

export default class PostContainer extends Component {

    render() {
        return (
			<div className="posts">
				{
					this.props.jobs.map((item) => {
						return <Post job={item} key={item.id} />
					})
				}
			</div>
        );
    }
}
