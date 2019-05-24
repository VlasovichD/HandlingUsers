import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/UsersData';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e) {
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                </div>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                </div>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Skype</span>
                </div>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Signature</span>
                </div>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
    }
}

export default connect(
    state => state.usersData,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserProfile);
