

export const eulerTotient = (n) => {
	
  if(n<0 ||typeof(n)!=="number")
  {
    return ()=>{ throw new Error()};
	}
	var ans = n;
	for(var i=2;i<=n;i++)
	{
		if(n%i==0)
		{
			while(n%i==0)
			{
				n=n/i;
			}
			ans = ans*(i-1)/i;
		}
	}

	return ans;


};
