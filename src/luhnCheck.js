/*
# ERROR HANDLING:
#   Return "invalid input" for:
#     *Negative Numbers
#     *NAN (Not A Number) Data Types
# 
# GOAL:
#   Validate a credit card number using a supplied credit card number string (ie. 4984421209470251)
#
# RETURN FORMAT:
#   true|false
#
*/

export const luhnCheck = str => {
  const regX = /[^a-zA-Z]/
  let num = parseInt(str)
  if (num < 0 || !num) return 'invalid input'

  var sum = 0,
    isEvenIndex = false

  for (var n = str.length - 1; n >= 0; n--) {
    let currentDigit = parseInt(str.charAt(n), 10)

    if (isEvenIndex) {
      if ((currentDigit *= 2) > 9) currentDigit -= 9
    }

    sum += currentDigit
    isEvenIndex = !isEvenIndex
  }

  return sum % 10 === 0
}
