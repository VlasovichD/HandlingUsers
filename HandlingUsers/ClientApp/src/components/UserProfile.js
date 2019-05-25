import React from 'react';

export default ({ user, update, index }) => {

    //onTextChanged(e) {
    //    var text = e.target.value.trim();   // удаляем пробелы
    //    this.props.filter(text); // передаем введенный текст в родительский компонент
    //}

    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name</span>
                </div>
                <input type="text" className="form-control" value={user.name} onChange={() => update({ name: this})} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</span>
                </div>
                <input type="text" className="form-control" value={user.email} onChange={() => update({ email: this })} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skype</span>
                </div>
                <input type="text" className="form-control" value={user.skype} onChange={() => update({ skype: this })} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Signature</span>
                </div>
                <input type="text" className="form-control" value={user.signature} onChange={() => update({ signature: this })} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
    );
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
