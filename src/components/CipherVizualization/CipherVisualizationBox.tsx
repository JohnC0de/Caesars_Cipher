import { CipherVizualizationProps } from './Index'

export function CipherVisualizationBox({
  cipherTextResult,
  cipherText
}: CipherVizualizationProps) {
  const cipherCharsStyle = 'px-1 font-mono font-semibold'

  return (
    <table className="mx-auto border border-black rounded-lg">
      <tr className=" bg-blue-300/40">
        {Array.from(cipherText).map(char => (
          <td className={cipherCharsStyle}>{char}</td>
        ))}
      </tr>
      <tr>
        {Array.from(cipherText).map(char => (
          <td
            className={`${cipherCharsStyle} bg-gradient-to-b from-blue-300/40 to-yellow-300/40`}
          >
            ↓
          </td>
        ))}
      </tr>
      <tr className=" bg-yellow-300/40">
        {Array.from(cipherTextResult).map(char => (
          <td className={cipherCharsStyle}>{char}</td>
        ))}
      </tr>
    </table>
  )
}
