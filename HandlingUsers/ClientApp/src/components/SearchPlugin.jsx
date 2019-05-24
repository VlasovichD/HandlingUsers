import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/UsersData';

class SearchPlugin extends React.Component {

    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e) {
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">&#128269;</span>
            </div>
            <input type="text" className="form-control" placeholder="Search" onChange={this.onTextChanged} />
        </div>
    }
}

export default connect(
    state => state.usersData,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(SearchPlugin);
