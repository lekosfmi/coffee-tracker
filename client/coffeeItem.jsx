CoffeeItem = React.createClass({
  	handleClick() {
  		var id = this.props.coffee._id;
  		Meteor.call("removeCoffee", id, function(e) {
  			if (e) alert(e.reason);
  		});
  	},

	render: function() {
		var date = moment(this.props.coffee.date).format("DD/MM/YYYY");
		var tail = this.props.coffee.coffees > 1 ? "coffees" : "coffee";

		return (
			<li onClick={this.handleClick}>On <strong>{date}</strong> grabbed <strong>{this.props.coffee.coffees}</strong> {tail}</li>
		);
	}
})
