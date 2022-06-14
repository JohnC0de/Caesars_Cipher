import { cipherStateEnum } from './App'

const UPPERCASE_MINIMUM_CHARCODE = 65
const UPPERCASE_MAXIMUM_CHARCODE = 90
const LOWERCASE_MINIMUM_CHARCODE = 97
const LOWERCASE_MAXIMUM_CHARCODE = 122

export function cipher(
  text: string,
  offset = 13,
  action = cipherStateEnum.encoding
) {
  return Array.from(text)
    .map(char => {
      const charCode = char.charCodeAt(0)

      const charCodeShifted =
        action === cipherStateEnum.decoding
          ? charCode - offset
          : charCode + offset

      const charUpperCase =
        charCode >= UPPERCASE_MINIMUM_CHARCODE &&
        charCode <= UPPERCASE_MAXIMUM_CHARCODE

      const charLowerCase =
        charCode >= LOWERCASE_MINIMUM_CHARCODE &&
        charCode <= LOWERCASE_MAXIMUM_CHARCODE

      if (charUpperCase || charLowerCase) {
        const maximumLimit = charUpperCase
          ? UPPERCASE_MAXIMUM_CHARCODE
          : LOWERCASE_MAXIMUM_CHARCODE

        const minimunLimit = charUpperCase
          ? UPPERCASE_MINIMUM_CHARCODE
          : LOWERCASE_MINIMUM_CHARCODE

        if (charCodeShifted > maximumLimit) {
          return String.fromCharCode(
            charCodeShifted - maximumLimit + minimunLimit - 1
          )
        } else if (charCodeShifted < minimunLimit) {
          return String.fromCharCode(
            charCodeShifted + maximumLimit - minimunLimit + 1
          )
        } else return String.fromCharCode(charCodeShifted)
      } else return char
    })
    .join('')
}
