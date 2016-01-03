BeerForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var numCoffees = React.findDOMNode(this.refs.numCoffees);
		var coffeeDate = React.findDOMNode(this.refs.coffeeDate);

		Meteor.call("insertCoffee", numCoffees.value, moment(coffeeDate.value).toDate(), function(e, r) {
			if (e) alert(e.reason)
		});

		numCoffees.value = "";
		coffeeDate.value = "";
	},

	render: function() {
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">Coffee Consumption</h3>
			  </div>
			  <div className="panel-body">
			    <form className="form-horizontal" onSubmit={this.handleSubmit}>
				  <div className="form-group">
				    <div className="col-sm-10">
				      <input type="number" className="form-control"
				      		placeholder="How many coffees?" ref="numCoffees" />
				    </div>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-10">
				      <input type="date" className="form-control" ref="coffeeDate"/>
				    </div>
				  </div>

				  <div className="form-group">
				    <div className="col-sm-10">
				      <button type="submit" className="btn btn-primary btn-block">Add</button>
				    </div>
				  </div>
				</form>
			  </div>
			</div>
		);
	}
})
