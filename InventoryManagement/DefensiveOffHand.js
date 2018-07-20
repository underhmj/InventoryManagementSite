class DefensiveOffHand extends OffHand
{
	constructor(name, durability, minDefense, maxDefense, stackable, image)
	{
		super(name,durability, stackable, image);
		this.minDefense = minDefense;
		this.maxDefense = maxDefense;
	}
	
	get MinDefense()
	{
		return this.minDefense;
	}
	
	get MaxDefense()
	{
		return this.maxDefense;
	}
	
	Defend()
	{
		if(this.currentDurability > 0)
		{
			this.currentDurability -= Math.floor(Math.random()*4);
			if(this.currentDurability <= 0)
			{
				this.currentDurability = 0;
				alert('Your '+this.name+' Has BROKEN!!');
			}
			console.log(this.currentDurability);
			var range = this.maxDefense - this.minDefense;
			var defenseOutput = Math.floor(Math.random()*range) + this.minDefense;
			console.log(defenseOutput);
		}
	}
}