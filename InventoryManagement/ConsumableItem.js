class ConsumableItem extends NonEquippableItem
{
	constructor(name, stackable, image)
	{
		super(name, stackable, image);
		this.consumed = false;
	}
	
	get Consumed()
	{
		return this.consumed;
	}
	
	ConsumeItem()
	{
		this.consumed = true;
	}
}