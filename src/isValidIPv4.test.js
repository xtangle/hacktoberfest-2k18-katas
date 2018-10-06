import { isValidIPv4 } from "./isValidIPv4";

describe("isValidIPv4", () => {
  it("empty string is not a valid ipv4 address", () => {
    expect(isValidIPv4("")).toEqual(false);
  });

  it("ipv4 address contains exactly 4 sub addresses", () => {
    expect(isValidIPv4("111")).toEqual(false);
    expect(isValidIPv4("111.111")).toEqual(false);
    expect(isValidIPv4("111.111.111")).toEqual(false);
    expect(isValidIPv4("111.111.111.111.111")).toEqual(false);
  });

  it("ipv4 address cannot contain non-digit", () => {
    expect(isValidIPv4("a.0.0.0")).toEqual(false);
    expect(isValidIPv4("192.168.!2.1")).toEqual(false);
  });

  it("Each sub address of ipv4 address is between 0 and 255", () => {
    expect(isValidIPv4("192.168.0.1")).toEqual(true);
    expect(isValidIPv4("0.0.0.0")).toEqual(true);
    expect(isValidIPv4("255.255.255.255")).toEqual(true);
  });
});
