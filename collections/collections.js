Coffees = new Meteor.Collection("Coffees");

Meteor.methods({
	"insertCoffee": function(numCoffees, date) {
		numCoffees = parseInt(numCoffees);

		check(numCoffees, Number);
		check(date, Date);

		return Coffees.insert({coffees: numCoffees, date: date});
	},

	"removeCoffee": function(id) {
		check(id, String);
		return Coffees.remove(id);
	}
})
