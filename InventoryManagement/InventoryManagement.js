class Inventory
{
	constructor(size)
	{
		this.items = [];
		this.items.length = size;
	}
	
	get Items()
	{
		return this.items;
	}
	
	checkBackground()
	{
		for(var i = 0; i < this.items.length; i++)
		{
			if (this.items[i] == undefined)
			{
				let string = "Holder"+i;
				let holderLocation = document.getElementById(string);
				holderLocation.style.backgroundImage = ''
				let stringNum = string+"Number";
				let numberLocation = document.getElementById(stringNum);
				numberLocation.innerHTML = '';
			}
			else if (this.items[i] instanceof Array)
			{
				let copy = this.items[i];
				let string = "Holder"+i;
				let holderLocation = document.getElementById(string);
				holderLocation.style.backgroundImage = copy[0].Image.toString();
				let stringNum = string+"Number";
				let numToPrint = copy.length.toString();
				let numberLocation = document.getElementById(stringNum);
				numberLocation.innerHTML = numToPrint;
			}
			else
			{
				let string = "Holder"+i;
				let holderLocation = document.getElementById(string);
				holderLocation.style.backgroundImage = this.items[i].Image.toString();
				let stringNum = string+"Number";
				let numberLocation = document.getElementById(stringNum);
				numberLocation.innerHTML = '';
			}
		}
	}
	
	
	
	addItem(item)
	{
		for(var i = 0; i < this.items.length; i++)
		{
			
			if (this.items[i] instanceof Array)
			{
				if ( this.items[i][0].name == item.name  )
				{
					this.items[i].unshift(item);
					inventory.checkBackground();
					return;
				}
			}
			if (!(this.items[i] == null))
			{
				if (this.items[i].name == item.name && item.Stackable)
				{
					let newArrayItem = [];
					newArrayItem = [item, this.items[i]];
					this.items[i] = newArrayItem;
					inventory.checkBackground();
					return;
				}
			}
		}
		for(var i = 0; i < this.items.length; i++)
		{
			if (this.items[i] == null)
			{
				this.items[i] = item;
				inventory.checkBackground();
				return;
			}
		}
		alert('Could not add '+item.Name+' to your inventory');
	}
	
	removeItem(item)
	{
		for(var i = 0; i < this.items.length; i++)
		{
			if (this.items[i] == null)
			{
				
			}
			else if (this.items[i] instanceof Array)
			{
				if ( this.items[i][0].name == item.name  )
				{
					this.items[i].shift();
					if ( this.items[i].length == 1)
					{
						let output = this.items[i][0];
						this.items[i] = output;
						inventory.checkBackground();
						return;
					}
					inventory.checkBackground();
					return;
				}
			}
			else if (this.items[i].name == item.name)
			{
				this.items[i] = null;
				inventory.checkBackground();
				return;
			}
		}
	}
}