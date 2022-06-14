import { useState } from 'react'
import { cipher } from './cipher'

export enum cipherStateEnum {
  encoding = 'Encode',
  decoding = 'Decode'
}

export function App() {
  const [cipherState, setCipherState] = useState<cipherStateEnum>(
    cipherStateEnum.encoding
  )
  const [cipherOffset, setCipherOffset] = useState(13)
  const [cipherText, setCipherText] = useState('')
  const testArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]

  const result = cipher(cipherText, cipherOffset, cipherState)

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center w-full max-w-[800px] gap-4 p-4 border-2 rounded-lg">
        <h1 className="text-2xl font-semibold text-center">Caesar Cipher</h1>
        <div className="flex">
          <button
            className={`border py-1 px-3 rounded-l-lg ${
              cipherState === cipherStateEnum.encoding &&
              'bg-blue-500 text-white'
            }`}
            onClick={() => {
              setCipherState(cipherStateEnum.encoding)
              cipherText === '' ? '' : setCipherText(result)
            }}
          >
            {cipherStateEnum.encoding}
          </button>
          <button
            className={`border py-1 px-3 rounded-r-lg ${
              cipherState === cipherStateEnum.decoding &&
              'bg-blue-500 text-white'
            }`}
            onClick={() => {
              setCipherState(cipherStateEnum.decoding)
              cipherText === '' ? '' : setCipherText(result)
            }}
          >
            {cipherStateEnum.decoding}
          </button>
        </div>

        <p className="flex justify-center">
          Offset:
          <input
            className="mx-2"
            type="range"
            min="1"
            max="25"
            defaultValue={13}
            onChange={e => setCipherOffset(Number(e.target.value))}
          ></input>
          {cipherOffset}
        </p>

        <div className="relative w-full">
          <textarea
            className="w-full px-2 py-1 text-sm border rounded-lg"
            onChange={e => setCipherText(e.target.value)}
            value={cipherText}
            maxLength={1000}
          ></textarea>
          <p className="absolute select-none bottom-2 right-6 text-black/40">
            Max lenght: 1000 characters
          </p>
        </div>
        <div className="flex items-center justify-between w-full gap-y-2">
          <button className="px-3 py-1 text-white bg-blue-500 border rounded-lg">
            Encrypt Text
          </button>
          <div className="flex items-center">
            <p>Before:</p>
            <div className="w-4 h-4 ml-1 border border-black bg-blue-300/40"></div>
            <p className="ml-4">After:</p>
            <div className="w-4 h-4 ml-1 border border-black bg-yellow-300/40"></div>
          </div>

          <button
            className="px-3 py-1 text-white bg-red-500 border rounded-lg"
            onClick={() => setCipherText('')}
          >
            Clear Text
          </button>
        </div>
        <div className="w-full p-1 overflow-x-auto border rounded-lg">
          {result === '' ? (
            <p className="text-center">Waiting for text to encrypt</p>
          ) : (
            <table className="mx-auto border border-black rounded-lg">
              <tr className=" bg-blue-300/40">
                {Array.from(cipherText).map(item => (
                  <td className="px-1 font-mono font-semibold">{item}</td>
                ))}
              </tr>
              <tr>
                {Array.from(cipherText).map(item => (
                  <td className="px-1 font-mono font-semibold bg-gradient-to-b from-blue-300/40 to-yellow-300/40">
                    ↓
                  </td>
                ))}
              </tr>
              <tr className=" bg-yellow-300/40">
                {Array.from(result).map(item => (
                  <td className="px-1 font-mono font-semibold">{item}</td>
                ))}
              </tr>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
