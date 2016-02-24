import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Profile from './github/profile.jsx';
import Search from './github/search.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'ataylor79',
      userData: [],
      userRepos: [],
      perPage: 10
    };
  }

  // Get user data from github
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({userData: data});
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  }

  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + 'sort=created',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({userRepos: data});
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  }

  handleFormSubmit(username) {
    this.setState({username: username}, function () {
      this.getUserData();
      this.getUserRepos();
    });
  }

  // on load
  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
        <div>
          <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
          <Profile {...this.state}/>
        </div>
      )
  }
}

// Static props
App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: '5ddb079677a273235094',
  clientSecret: '4ab1aa76cbad00402503557420b2a6f94ceafd91'
};

export default App;