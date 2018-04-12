import React,{Component} from 'react';
import {Input} from 'antd';
const Search = Input.Search;
import 'antd/lib/input/style';

export default class SearchContainer extends Component {

    render() {
        return (
            <div className="search">
				<Search />
            </div>
        );
    }
}
