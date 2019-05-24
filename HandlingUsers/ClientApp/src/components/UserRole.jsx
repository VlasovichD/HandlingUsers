import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/UsersData';

class UserRole extends React.Component {

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
            <form>
                <div className="radio">
                    <div className="row bg-light">
                        <div className="col-sm-3">
                            <input type="radio" value="User"
                                //checked={this.state.selectedOption === 'User'}
                                onChange={this.handleOptionChange} />
                            <div>User</div>
                        </div>
                        <div className="col-sm-3">
                            <input type="radio" value="Manager"
                                //checked={this.state.selectedOption === 'Manager'}
                                onChange={this.handleOptionChange} />
                            <div>Manager</div>
                        </div>
                        <div className="col-sm-3">
                            <input type="radio" value="Admin"
                                //checked={this.state.selectedOption === 'Admin'}
                                onChange={this.handleOptionChange} />
                            <div>Admin</div>
                        </div>
                        <div className="col-sm-3">
                            <input type="radio" value="Support"
                                //checked={this.state.selectedOption === 'Support'}
                                onChange={this.handleOptionChange} />
                            <div>Support</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    }
}

export default connect(
    state => state.usersData,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserRole);
