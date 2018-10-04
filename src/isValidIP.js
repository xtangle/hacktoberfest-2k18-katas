export const isValidIP = (ipAddress) => {
  const IPV4regexp = /(([2][0-5][0-5]|[01]?[0-9][0-9]?)\.){3}([2][0-5][0-5]|[01]?[0-9][0-9]?)$/;
  const IPV6regexp = /([0-f]{1,4}:){7}[0-f]{1,4}$/;
  return IPV4regexp.test(ipAddress) || IPV6regexp.test(ipAddress);
};