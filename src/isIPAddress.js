export const isIPAddress = (input) => {
	if(input == null) return False;
	if(!(typeof input === 'string' || input instanceof String)) return False;
	var i;
	var s="";
	var count=0;
	for(i=0;i<input.length;i++) {
	if(input.charAt(i)=='.') {
		count++;
		if(s.length>0) {
			if(s.charAt(0)==0&&s.length>1)
				return False;
			else if(!(parseInt(s)>=0 && parseInt(s)<=255))
				return False;
		}
		else
			return False;
	}
	else if((input.charAt(i)>='0'&&input.charAt(i)<='9')
		s+=input.charAt(i)
		else
			return False;
	}
	if(count!=3)
	return False;
	if(s.length>0) {
		if(s.charAt(0)==0&&s.length>1)
			return False;
		else if(!(parseInt(s)>=0 && parseInt(s)<=255))
			return False;
	}
	else return False;
	return True;
}
