import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/WeatherForecasts';
import UserMenu from './UserMenu';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        //this.state = { items: this.props.data.items };

        this.filterList = this.filterList.bind(this);
    }
    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.ensureDataFetched();
    }

    ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    }

    filterList(text) {
        var filteredList = this.props.data.items.filter(function (item) {
            return item.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({ items: filteredList });
    }

    render() {
        return (
            <div className="container">
                <div className="row bg-light">
                    <div className="col-sm-3">
                        <div class="input-group mb-3">
                            <button className="btn btn-light btn-block text-left">&#8853; Add user</button>
                        </div>
                        <div><SearchPlugin filter={this.filterList} /></div>
                        <hr color="#6c757d" />
                        {renderPagination(this.props)}
                        <div id="sidebar">{renderForecastsTable(this.props)}</div>
                    </div>
                    <div className="col-sm-9">
                        <ul className="nav justify-content-center bg-secondary">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#"><u>Profile</u></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">User role</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-white" href="#">Settings</a>
                            </li>
                        </ul>
                        <div className="row">
                            <div className="col-sm-4">
                                <img src="" alt="" width="189" height="255" className="img-thumbnail" />
                            </div>
                            <div className="col-sm-8">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Name</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Email</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Skype</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Signature</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
        );
    }
}

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
        return <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">&#128269;</span>
            </div>
            <input type="text" class="form-control" placeholder="Search" onChange={this.onTextChanged} aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    }
}

function renderForecastsTable(props) {
    return (
        <ul class="list-group" id="sidebar-list">
            <li class="list-group-item bg-secondary">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item bg-secondary">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item bg-secondary">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item bg-secondary">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item bg-secondary">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item bg-secondary">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        //<table className='table table-striped'>
        //    <thead>
        //        <tr>
        //            <th>Date</th>
        //            <th>Summary</th>
        //        </tr>
        //    </thead>
        //    <tbody>
        //        {props.forecasts.map(forecast =>
        //            <tr key={forecast.dateFormatted}>
        //                <td>{forecast.dateFormatted}</td>
        //                <td>{forecast.summary}</td>
        //            </tr>
        //        )}
        //    </tbody>
        //</table>
    );
}

function renderPagination(props) {
    const prevStartDateIndex = (props.startDateIndex || 0) - 5;
    const nextStartDateIndex = (props.startDateIndex || 0) + 5;

    return <nav className="nav nav nav-fill">
        <a className="nav-item nav-link text-dark" href={`/${prevStartDateIndex}`}><strong>Enabled</strong></a>
        <a className="nav-item nav-link text-dark" href={`/${nextStartDateIndex}`}>Disabled</a>
    </nav>;

    //<p className='clearfix text-center'>
    //    <Link className='btn btn-default pull-left' to={`/${prevStartDateIndex}`}>Previous</Link>
    //    <Link className='btn btn-default pull-right' to={`/${nextStartDateIndex}`}>Next</Link>
    //    {props.isLoading ? <span>Loading...</span> : []}
    //</p>;
}

export default connect(
    state => state.weatherForecasts,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
