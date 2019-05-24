import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/UsersData';

import './UserEnabling.css';

class UserSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: null
        }
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    componentWillMount() {
        this.setState({ isChecked: this.props.isChecked });
    }

    onTextChanged(e) {
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <div>Enable
            <div className="switch-container">
                <label>
                    <input ref="switch" checked={this.state.isChecked} onChange={this._handleChange} className="switch" type="checkbox" />
                    <div>
                        <div>

                        </div>
                    </div>
                </label>
            </div>
        </div>
    }

    _handleChange() {
        //this.setState({ isChecked: !this.state.isChecked });
    }
}

export default connect(
    state => state.usersData,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserSettings);
