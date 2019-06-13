import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class SearchPluginComponent extends Vue {
    enabled: boolean = true;

    handleEnabled() { this.enabled = true; };
    handleDisabled() { this.enabled = false; };
}


//export default ({ term, data, update }) => {

//    const dataSearch = e => {
//        const value = e.target.value.toLowerCase();

//        const filter = data.filter(user => {
//            return user.name.toLowerCase().includes(value);
//        });

//        update({
//            users: filter,
//            active: 0,
//            term: value
//        });

//    };

//    return (
//        <div className="input-group mb-3">
//            <div className="input-group-prepend">
//                <span className="input-group-text" role="img" aria-label="Search" aria-describedby="basic-addon1">&#128269;</span>
//            </div>
//            <input
//                value={term}
//                type="text"
//                className="form-control"
//                placeholder="Search"
//                onChange={dataSearch}
//            />
//        </div>
//    );
//};