import React from 'react';

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            isUpdated: false,
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    //handleUpdate(event) {
    //    event.preventDefault();

    //    this.setState({ submitted: true });
    //    const { ticket } = this.state;
    //    ticket.user.username = this.props.user.username;
    //    const { dispatch } = this.props;
    //    if (ticket.name && ticket.description) {
    //        dispatch(ticketActions.update(ticket));
    //        this.setState({ isUpdated: false });
    //    }
    //}

    //onTextChanged(e) {
    //    var text = e.target.value.trim();   // удаляем пробелы
    //    this.props.filter(text); // передаем введенный текст в родительский компонент
    //}

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.user.name}
                        placeholder="Firstname Lastname"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.user.email}
                        placeholder="example@mail.com"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skype
                            </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="skype"
                        value={this.state.user.skype}
                        placeholder="live: skype"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Signature</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="signature"
                        value={this.state.user.signature}
                        placeholder="Write your signature here..."
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    };
};

//export class UserProfile extends Component {

//    constructor(props) {
//        super(props);

//        this.state = {
//            user: this.props.user,


//        };
//        this.onTextChanged = this.onTextChanged.bind(this);
//    }

//    onTextChanged(e) {
//        var text = e.target.value.trim();   // удаляем пробелы
//        this.props.filter(text); // передаем введенный текст в родительский компонент
//    }

//    render() {
//        return <div>
//            <div className="input-group mb-3">
//                <div className="input-group-prepend">
//                    <span className="input-group-text" id="basic-addon1">Name</span>
//                </div>
//                {console.log()}
//                <input type="text" className="form-control" value={this.state.user} aria-label="Username" aria-describedby="basic-addon1" />
//            </div>
//            <div className="input-group mb-3">
//                <div className="input-group-prepend">
//                    <span className="input-group-text" id="basic-addon1">Email</span>
//                </div>
//                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
//            </div>
//            <div className="input-group mb-3">
//                <div className="input-group-prepend">
//                    <span className="input-group-text" id="basic-addon1">Skype</span>
//                </div>
//                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
//            </div>
//            <div className="input-group mb-3">
//                <div className="input-group-prepend">
//                    <span className="input-group-text" id="basic-addon1">Signature</span>
//                </div>
//                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
//            </div>
//        </div>
//    }
//}
