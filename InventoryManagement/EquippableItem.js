class EquippableItem extends Item
{
	constructor(name, durability, stackable, image)
	{
		super(name, stackable, image);
		this.durability = durability;
		this.currentDurability = durability;
	}
	
	get Durability()
	{
		return this.durability;
	}
	
	get CurrentDurability()
	{
		return this.currentDurability;
	}
	
	set CurrentDurability(newCurrentDurability)
	{
		if (newCurrentDurability > this.durability)
		{
			newCurrentDurability = this.durability;
		}
		this.currentDurability = newCurrentDurability;
	}
}