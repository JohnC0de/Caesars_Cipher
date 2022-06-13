function cipher(text, offset = 13, action = 'encode') {
  return Array.from(text)
    .map(char => {
      const charCode = char.charCodeAt()
      const charShifted =
        action === 'decode' ? charCode - offset : charCode + offset
      if (charCode > 64 && charCode < 91) {
        if (charShifted > 90) {
          return String.fromCharCode(charShifted - 90 + 64)
        } else if (charShifted < 65) {
          return String.fromCharCode(charShifted + 90 - 64)
        } else return String.fromCharCode(charShifted)
      } else return char
    })
    .join('')
}
