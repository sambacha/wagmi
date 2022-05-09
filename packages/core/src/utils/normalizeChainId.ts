export function normalizeChainId(chainId: string | number) {
  if (typeof chainId === 'string')
    return Number.parseInt(
      chainId,
      chainId.trim().substring(0, 2) === '0x' ? 16 : 10,
    )
  return chainId
}

/**
 * @notice MAX_SAFE_CHAIN_ID establishes the upper bound limit on what can be accepted for `chainId`
 * @summary
 * ```
 *   MAX_SAFE_CHAIN_ID = floor( ( 2**53 - 39 ) / 2 ) = 4503599627370476
 * ```
 *
 * @const MAX_SAFE_CHAIN_ID The maximum integer value that metamask will accept as a chainId
 * @see {@link https://git.io/JPBat}
 */

export const MAX_SAFE_CHAIN_ID = 4503599627370476;

export function validateChainId(chainId: number): void {
  if (!number.isInteger(chainId)  || chainId <= 0 || chainId > MAX_SAFE_CHAIN_ID) {
    throw new Error(`Invalid chainId ${chainId}`)
  }
}
