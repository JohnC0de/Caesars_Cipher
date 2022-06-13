import { cipherStateEnum } from './App'

const MINIMUM_UPPERCASE_CHARCODE = 65
const MAXIMUM_UPPERCASE_CHARCODE = 90
const MINIMUM_LOWERCASE_CHARCODE = 97
const MAXIMUM_LOWERCASE_CHARCODE = 122

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
      if (
        charCode >= MINIMUM_UPPERCASE_CHARCODE &&
        charCode <= MAXIMUM_UPPERCASE_CHARCODE
      ) {
        if (charCodeShifted > MAXIMUM_UPPERCASE_CHARCODE) {
          return String.fromCharCode(
            charCodeShifted -
              MAXIMUM_UPPERCASE_CHARCODE +
              MINIMUM_UPPERCASE_CHARCODE -
              1
          )
        } else if (charCodeShifted < MINIMUM_UPPERCASE_CHARCODE) {
          return String.fromCharCode(
            charCodeShifted +
              MAXIMUM_UPPERCASE_CHARCODE -
              MINIMUM_UPPERCASE_CHARCODE -
              1
          )
        } else return String.fromCharCode(charCodeShifted)
      } else return char
    })
    .join('')
}
