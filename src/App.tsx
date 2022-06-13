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

  const result = cipher(cipherText, cipherOffset, cipherState)

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center w-full gap-4 p-4 border-2 rounded-lg">
        <h1 className="text-2xl font-semibold text-center">Caesar Cipher</h1>
        <div className="flex">
          <button
            className={`border py-1 px-3 rounded-l-lg ${
              cipherState === cipherStateEnum.encoding &&
              'bg-blue-500 text-white'
            }`}
            onClick={() => setCipherState(cipherStateEnum.encoding)}
          >
            {cipherStateEnum.encoding}
          </button>
          <button
            className={`border py-1 px-3 rounded-r-lg ${
              cipherState === cipherStateEnum.decoding &&
              'bg-blue-500 text-white'
            }`}
            onClick={() => setCipherState(cipherStateEnum.decoding)}
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
            max="26"
            defaultValue={13}
            onChange={e => setCipherOffset(Number(e.target.value))}
          ></input>
          {cipherOffset}
        </p>

        <textarea
          className="w-full border rounded-lg"
          onChange={e => setCipherText(e.target.value)}
        ></textarea>
        <div className="flex justify-between w-full">
          <button className="px-3 py-1 border rounded-lg">Encrypt Text</button>
          <button className="px-3 py-1 border rounded-lg">Clear Text</button>
        </div>
        <div className="w-full px-3 py-1 text-center border rounded-lg">
          {result}
          {cipher(result, cipherOffset, cipherStateEnum.decoding) ===
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ' && 'Encryption Complete! Working!'}
        </div>
      </div>
    </div>
  )
}
