
//Root Component of Github search App

var GitSearch = React.createClass({

// Making AJAX call for getting the api from api.github.com/users

      getDetailfromServer:function (){
            $.ajax({
                  url: this.props.data,
                  dataType: 'json',
                  cache: false,
                  success: function(data) {
                    this.setState({data: data});
                  }.bind(this),
                    error: function(xhr, status, err) {
                      console.error(this.props.data, status, err.toString());
                  }.bind(this)
              });
              $.ajax({
                    url: this.props.repo,
                    dataType: 'json',
                    cache: false,
                    success: function(data) {
                      this.setState({data: ''});
                    }.bind(this),
                      error: function(xhr, status, err) {
                        console.error(this.props.data, status, err.toString());
                    }.bind(this)
                });
    },
// Setting the initial state
      getInitialState: function() {
                  return {data: []};
   },
 // mounting the data from the server
      componentDidMount: function() {

            this.getDetailfromServer();

  },
  //render function for returning JSX
    render: function() {
            return (
              <div className ="container">
                <div className="gitSearch ">
                      <h3 className="text-center">Github Search App</h3>
                      <i className="fa fa-github-alt fa-5x text-center" aria-hidden="true"></i>
                        <SearchBox
                          value ={this.state.value}
                          onUserInput = {this.handleUserInput}
                         />,
                        <h1 className="text-center">Git User List </h1>

                            <DisplayUser data = {this.state.data} />,

                </div>
              </div>
          );
            }
    });

// COmponent for displaying the user results

  var DisplayUser = React.createClass({

    render: function (){

      var userList = this.props.data.map(function(user){

        return (
          <user key={user.login}>
                <div className="row">
                    <div className="col-md-2">
                        <img src={user.avatar_url} className="img-responsive"/>
                    </div>
                    <div className="col-md-8">
                        <h3 className="user-style" > {user.login} </h3>
                        <a href={user.repos_url}> View repo </a>
                    </div>
                  </div>
            </user>
        );

      });
        return (
       <div className = "displayUser">
        {userList}
       </div>
    );
    }

  });

 // Search box compoinent for accepting  user input

  var SearchBox = React.createClass ({
    getInitialState: function (){
              return {value: 'username'}
    },
    handleChange: function(event){
              this.setState({value :event.target.value})
    },
    render : function () {
          return (
              <div className="row">
                <div className="col-md-12">

                      <input type="text"
                      className="form-control"
                      placeholder="Search for user /repo"
                      value ={this.state.value}
                      ref="filterTextInput"
                      onChange={this.handleChange}/>
                </div>
            </div>

          );
        }
  });

  // var ShowOpenIssue = React.createClass ({
  //
  // });
  //
  // var SearchByTag = React.createClass ({
  //
  // });
  ReactDOM.render(

        <GitSearch data = "https://api.github.com/users"
        repo = "https://api.github.com/repositories"/>,
          document.getElementById('content')
        );
