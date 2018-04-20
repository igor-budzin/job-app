import React,{Component} from 'react';
import Post from './post';

export default class PostContainer extends Component {

    render() {
        return (
			<div className="posts">
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
        );
    }
}
