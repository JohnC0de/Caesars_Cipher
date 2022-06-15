import { CipherVisualizationBox } from './CipherVisualizationBox'

export type CipherVizualizationProps = {
  cipherTextResult: string
  cipherText: string
}

export default function CipherVisualization({
  cipherTextResult,
  cipherText
}: CipherVizualizationProps) {
  return (
    <div className="w-full p-1 overflow-x-auto border rounded-lg">
      {cipherTextResult === '' ? (
        <div className="flex flex-col gap-4 p-2">
          <p className="text-center">
            Please, enter the text you wish to encrypt or decrypt in the box
            above.
          </p>
          <hr />
          <CipherVisualizationBox
            cipherTextResult={cipherTextResult}
            cipherText={'Waiting...'}
          />
        </div>
      ) : (
        <CipherVisualizationBox
          cipherTextResult={cipherTextResult}
          cipherText={cipherText}
        />
      )}
    </div>
  )
}
