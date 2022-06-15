import { useEffect } from 'react'
import { cipherStateEnum } from '../../App'
import { cipher } from '../../cipher'

type CipherInputFieldsProps = {
  cipherState: cipherStateEnum
  cipherOffset: number
  cipherText: string
  cipherTextResult: string
  setCipherState: (cipherState: cipherStateEnum) => void
  setCipherOffset: (cipherOffset: number) => void
  setCipherText: (cipherText: string) => void
  setCipherTextResult: (cipherTextResult: string) => void
}

export default function CipherInputFields({
  cipherState,
  cipherOffset,
  cipherText,
  cipherTextResult,
  setCipherState,
  setCipherOffset,
  setCipherText,
  setCipherTextResult
}: CipherInputFieldsProps) {
  useEffect(() => {
    setCipherTextResult(cipher(cipherText, cipherOffset, cipherState))
  }, [cipherText, cipherOffset, cipherState])
  return (
    <>
      <h1 className="text-2xl font-semibold text-center">Caesar Cipher</h1>
      <div className="flex">
        <button
          className={`border py-1 px-3 rounded-l-lg ${
            cipherState === cipherStateEnum.encoding && 'bg-blue-500 text-white'
          }`}
          onClick={() => {
            setCipherState(cipherStateEnum.encoding)
            cipherText === '' ? '' : setCipherText(cipherTextResult)
          }}
        >
          {cipherStateEnum.encoding}
        </button>
        <button
          className={`border py-1 px-3 rounded-r-lg ${
            cipherState === cipherStateEnum.decoding && 'bg-blue-500 text-white'
          }`}
          onClick={() => {
            setCipherState(cipherStateEnum.decoding)
            cipherText === '' ? '' : setCipherText(cipherTextResult)
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
    </>
  )
}
