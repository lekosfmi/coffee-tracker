App = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	    return {
	      coffees: Coffees.find({}).fetch()
	    }
  	},

  	mapData: function() {
  		var data = [
  			{ qty: 0, xLabel: "Sun" },
  			{ qty: 0, xLabel: "Mon" },
  			{ qty: 0, xLabel: "Tue" },
  			{ qty: 0, xLabel: "Wed" },
  			{ qty: 0, xLabel: "Thu" },
  			{ qty: 0, xLabel: "Fri" },
  			{ qty: 0, xLabel: "Sat" },
  		];
  		this.data.coffees.map(function(d) {
	      data[moment(d.date).day()].qty += d.coffees;
	    });

	    return data;
  	},

	render: function() {
		return (
		  <div>
		  	<div className="page-header">
					<center><h1><i className="fa fa-coffee"></i> Coffee</h1></center>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<BeerForm />
						<BeerList data={this.data.coffees}/>
					</div>

					<div className="col-md-offset-2 col-md-6">
						<BarChart data={this.mapData()} width="480" height="320"/>
					</div>
				</div>
			</div>
		  </div>
		);
	}
});
