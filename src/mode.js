export const mode = (Numbers) => {
  Numbers.sort(function(a, b){return a - b});
    
     var Modes;
     var ModeLength = 0;
    
    for (i = 0; i < Numbers.length; i++) { 
        
        var count = Numbers.filter((v) => (v === Numbers[i])).length;
        
        if(count > ModeLength){
                Modes = [];
                Modes.push(Numbers[i])
                ModeLength = count;
                    
            }
        
        if((count == ModeLength) && !(Modes.indexOf(Numbers[i]) >= 0)){
        
            Modes.push(Numbers[i])
                ModeLength = count;
        }
    
    }
    
    return Modes;
};