/**
 * Responsive image helpers.
 *
 * Narrower copies of approved images live next to the original with a width
 * suffix, e.g. `/assets/jc-2l-ratchet.webp` -> `/assets/jc-2l-ratchet-640w.webp`.
 * They are made from the exact file the site displays, never an older version.
 */

/** Path of the pre-generated copy `width` pixels wide. */
export function sized(url: string, width: number) {
  return url.replace(/\.webp$/, `-${width}w.webp`);
}

/** `srcSet` offering the narrow copy and the original. */
export function srcSet(url: string, width: number, fullWidth: number) {
  return `${sized(url, width)} ${width}w, ${url} ${fullWidth}w`;
}

/** Product photos: 640px copies for cards and thumbnails, originals for large views. */
export const PRODUCT_IMAGE_WIDTH = 640;
const PRODUCT_FULL_WIDTH = 1254;

export function productSrcSet(url: string) {
  return srcSet(url, PRODUCT_IMAGE_WIDTH, PRODUCT_FULL_WIDTH);
}

/**
 * A 1x1 transparent GIF. Used as a media-specific `<source>` so a picture
 * that is hidden at the current screen size downloads nothing.
 */
export const EMPTY_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
