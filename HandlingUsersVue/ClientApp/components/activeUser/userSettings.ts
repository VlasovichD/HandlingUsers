import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ActiveUserComponent from '../activeUser/activeUser';
import './userSettings.css';

interface User {
    name: string;
    email: string;
    skype: string;
    signature: string;
    avatar: any;
    role: string;
    enabled: boolean;
}

@Component
export default class UserSettingsComponent extends Vue {
    user: User = {
        name: 'Alex',
        email: 'Aadsas',
        skype: 'sdf',
        signature: 'saf',
        avatar: '',
        role: 'Admin',
        enabled: true
    };

    mounted() {
        this.user = ActiveUserComponent.arguments;
    }
}


//export class UserSettings extends React.Component {
//    constructor(props) {
//        super(props);

//        this.state = {
//            user: props.user,
//            isUpdated: false,
//        };

//        this.handleChange = this.handleChange.bind(this);
//        this.handleUpdate = this.handleUpdate.bind(this);
//    }

//    handleChange(event) {
//        const { user } = this.state;
//        this.setState({
//            user: {
//                ...user,
//                enabled: !user.enabled
//            }
//        });
//    }

//    handleUpdate(event) {
//        const { user } = this.state;
//        const requestOptions = {
//            method: 'PUT',
//            headers: { 'Content-Type': 'application/json' },
//            body: JSON.stringify(user)
//        };

//        return fetch(`/api/Users/${user.id}`, requestOptions);
//    }

//    render() {
//        return <div>
//            <span>{this.state.user.enabled ? 'Disable' : 'Enable'}</span>
//            <label className="switch">
//                <input
//                    type="checkbox"
//                    checked={this.state.user.enabled}
//                    onChange={this.handleChange}
//                    onBlur={this.handleUpdate}
//                />
//                <span className="slider round"></span>
//            </label>
//        </div>
//    };
//};