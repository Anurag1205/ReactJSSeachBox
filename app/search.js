var SearchBox = React.createClass ({
  getInitialState: function (){
      return {value: 'Hello'}
  },
  handleChange: function(event){
      this.setState({value :event.target.value})
  },
  render : function () {
    return (
        <div className="row">
          <div className="col-md-12">
            <div className="input-group">

                <input type="text"
                className="form-control"
                placeholder="Search for user /repo"
                value ={this.state.value}
                ref="filterTextInput"
                onChange={this.handleChange}/>
            </div>
          </div>
      </div>

    );
  }
});
