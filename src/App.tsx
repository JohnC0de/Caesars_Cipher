import { useState } from 'react'

enum cipherStateEnum {
  encoding = 'Encode',
  decoding = 'Decode'
}

export function App() {
  const [cipherState, setCipherState] = useState<cipherStateEnum>(
    cipherStateEnum.encoding
  )
  function handleActiveButton() {
    if (cipherState === cipherStateEnum.encoding)
      setCipherState(cipherStateEnum.decoding)
    else setCipherState(cipherStateEnum.encoding)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="border-2 flex flex-col items-center w-full p-4 gap-4 rounded-lg">
        <h1 className="text-2xl font-semibold text-center">Caesar Cipher</h1>
        <div className="flex">
          {Object.values(cipherStateEnum).map(function (name, value) {
            return (
              <button
                className={`border py-1 px-3 rounded-l-lg ${
                  cipherState === cipherStateEnum.encoding
                    ? 'bg-blue-500 text-white'
                    : ''
                }`}
                onClick={() => this.someFunct(name)}
                key={name}
              >
                {name}
              </button>
            )
          })}
        </div>
        <textarea className="border w-full rounded-lg">Encrypt Text</textarea>
        <button type="submit"></button>
        <button className="border py-1 px-3 rounded-lg">Clear Text</button>
      </div>
    </div>
  )
}
