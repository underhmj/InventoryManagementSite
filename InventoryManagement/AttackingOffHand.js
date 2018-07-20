class AttackingOffHand extends OffHand
{
	constructor(name, durability, minDamage, maxDamage, stackable, image)
	{
		super(name,durability,stackable, image);
		this.minDamage = minDamage;
		this.maxDamage = maxDamage;
	}
	
	get MinDamage()
	{
		return this.minDamage;
	}
	
	get MaxDamage()
	{
		return this.maxDamage;
	}
	
	Attack()
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
			var range = this.maxDamage - this.minDamage;
			var damageOutput = Math.floor(Math.random()*range) + this.minDamage;
			console.log(damageOutput);
		}
	}

}