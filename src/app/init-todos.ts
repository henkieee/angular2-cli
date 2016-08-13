export class Init {
	public load()
	{
		const todos = localStorage.getItem('todos');
		if(todos === null || todos == undefined) this.init(null);
		else console.log('todos found');
	}

	public init(_todos)
	{
		const todos =  _todos || [{
	  		text: "Paspoort verlengen"
	  	}, 
	  	{
	  		text: "Eten maken"
	  	},
	  	{
	  		text: "Telefoon opladen"
	  	}];
	  	localStorage.setItem('todos', JSON.stringify(todos));
	}
}