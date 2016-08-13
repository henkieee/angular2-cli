export class Init {
	public load()
	{
		const todos = localStorage.getItem('todos');
		if(todos === null || todos == undefined) this.init();
		else console.log('todos found');
	}

	private init()
	{
		const todos =  [{
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