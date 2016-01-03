BeerList = React.createClass({

  	renderCoffee() {
		return this.props.data.map((coffee) => {
		  return <CoffeeItem coffee={coffee} />;
		});
	},

	render: function() {
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">History
			    <small> click to remove</small>
			    </h3>
			  </div>
			  <div className="panel-body">
			    <ul>
			    	{this.renderCoffee()}
			    </ul>
			  </div>
			</div>
		);
	}
})
