import React from 'react';

export default ({ user, update, index }) => {

    //onTextChanged(e) {
    //    var text = e.target.value.trim();   // ������� �������
    //    this.props.filter(text); // �������� ��������� ����� � ������������ ���������
    //}

    return (
        <div>
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
    );
};

//export class UserRole extends Component {

//    constructor(props) {
//        super(props);
//        this.onTextChanged = this.onTextChanged.bind(this);
//    }

//    onTextChanged(e) {
//        var text = e.target.value.trim();   // ������� �������
//        this.props.filter(text); // �������� ��������� ����� � ������������ ���������
//    }

//    render() {
//        return <div>
//            <form>
//                <div className="radio">
//                    <div className="row bg-light">
//                        <div className="col-sm-3">
//                            <input type="radio" value="User"
//                                //checked={this.state.selectedOption === 'User'}
//                                onChange={this.handleOptionChange} />
//                            <div>User</div>
//                        </div>
//                        <div className="col-sm-3">
//                            <input type="radio" value="Manager"
//                                //checked={this.state.selectedOption === 'Manager'}
//                                onChange={this.handleOptionChange} />
//                            <div>Manager</div>
//                        </div>
//                        <div className="col-sm-3">
//                            <input type="radio" value="Admin"
//                                //checked={this.state.selectedOption === 'Admin'}
//                                onChange={this.handleOptionChange} />
//                            <div>Admin</div>
//                        </div>
//                        <div className="col-sm-3">
//                            <input type="radio" value="Support"
//                                //checked={this.state.selectedOption === 'Support'}
//                                onChange={this.handleOptionChange} />
//                            <div>Support</div>
//                        </div>
//                    </div>
//                </div>
//            </form>
//        </div>
//    }
//}