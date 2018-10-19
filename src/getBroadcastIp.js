import { throwError } from "rxjs";

export const getBroadcastIp = (addr) => {
  // Input
  var addr = '123.456.789.10/11';
  // Output
  var broadcastAddr = [];

  // Validate IP address format.
  var regex = new RegExp("^0*?(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.0*?(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.0*?(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.0*?(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/0*?(3[0-1]|[0-2]\\d)$");
  var invalidIP = new Error('Invalid IP Address!');
  if (addr.match(regex) == null) {
      throw invalidIP
  }

  // Seperate IP addr and mask.
  var mask = addr.substring(addr.indexOf('/') + 1);
  var ip = addr.substring(0, (addr.indexOf('/') + 1)-1).split('.');

  // Generate decimal mask
  numMask = Number(mask);
  mask = '';
  for (i=0; i<numMask; i++) {
    mask = mask + '1';
  }
  while (mask.length < 32) {
    mask = mask + '0';
  }
  var start = mask;
  var mask = [];
  mask[0] = start.substring(0,8);
  mask[1] = start.substring(8,16);
  mask[2] = start.substring(16,24);
  mask[3] = start.substring(24,32);
  for (i=0;i<mask.length;i++) {
    mask[i] = String(parseInt(mask[i], 2));
  }

  // Generate broadcast address
  for (i=0;i<ip.length;i++) {
      broadcastAddr[i] = createBinaryString(ip[i] | ~mask[i]).substr(-8);
      broadcastAddr[i] = parseInt(broadcastAddr[i],2);
  }

  // Supporting functions
  function createBinaryString (nMask) {
    // nMask must be between -2147483648 and 2147483647
    for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
         nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
    return sMask;
  }
  
  return broadcastAddr.join('.')
};
