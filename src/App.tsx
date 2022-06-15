import { useState } from 'react'
import { cipher } from './cipher'
import CipherInputFields from './components/CipherInputFields/Index'
import CipherVisualization from './components/CipherVizualization/Index'

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
  const [cipherTextResult, setCipherTextResult] = useState('')

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center w-full max-w-[800px] gap-4 p-4 border-2 rounded-lg border-black">
        <CipherInputFields
          cipherState={cipherState}
          cipherOffset={cipherOffset}
          cipherText={cipherText}
          cipherTextResult={cipherTextResult}
          setCipherState={setCipherState}
          setCipherOffset={setCipherOffset}
          setCipherText={setCipherText}
          setCipherTextResult={setCipherTextResult}
        />
        <div className="flex items-center justify-around w-full gap-y-2">
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
        <CipherVisualization
          cipherTextResult={cipherTextResult}
          cipherText={cipherText}
        />
      </div>
    </div>
  )
}
