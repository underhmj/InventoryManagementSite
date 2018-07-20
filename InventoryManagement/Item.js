class Item
{
	constructor(name,stackable,image)
	{
		this.name = name;
		this.stackable = stackable;
		this.image = image;
	}
	
	get Name()
	{
		return this.name;
	}
	
	get Stackable()
	{
		return this.stackable;
	}
	
	get Image()
	{
		return this.image;
	}
}