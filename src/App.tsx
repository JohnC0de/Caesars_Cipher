import { useState } from 'react'

enum cipherStateEnum {
  encoding = 'Encode',
  decoding = 'Decode'
}

export function App() {
  const [cipherState, setCipherState] = useState<cipherStateEnum>(
    cipherStateEnum.encoding
  )
  const [cipherOffset, setCipherOffset] = useState(13)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="border-2 flex flex-col items-center w-full p-4 gap-4 rounded-lg">
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
            max="13"
            defaultValue={13}
            onChange={e => setCipherOffset(Number(e.target.value))}
          ></input>
          {cipherOffset}
        </p>

        <textarea className="border w-full rounded-lg"></textarea>
        <div className="flex justify-between w-full">
          <button className="border py-1 px-3 rounded-lg">Encrypt Text</button>
          <button className="border py-1 px-3 rounded-lg">Clear Text</button>
        </div>
      </div>
    </div>
  )
}
