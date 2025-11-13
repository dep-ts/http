import { http } from './http.ts';
import { HttpOptions } from './types.ts';

/**
 * Performs an HTTP PUT request to replace or create a resource
 * @param url - The URL or RequestInfo to send the PUT request to
 * @param options - Configuration options excluding method (automatically set to 'PUT')
 * @returns Promise resolving to Response object
 * @throws {Error} When request fails due to network issues or timeout
 * @example
 * ```typescript
 * // Replace entire resource
 * const response = await put('https://api.example.com/users/123', {
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({
 *     name: 'Complete User Data',
 *     email: 'user@example.com',
 *     role: 'admin'
 *   })
 * });
 *
 * // PUT with conditional headers
 * const result = await put('https://api.example.com/documents/456', {
 *   body: JSON.stringify({ content: 'new content' }),
 *   headers: {
 *     'Content-Type': 'application/json',
 *     'If-Match': 'etag-value'
 *   },
 *   timeout: 8000
 * });
 *
 * if (response.status === 201) {
 *   console.log('Resource created');
 * } else if (response.status === 200) {
 *   console.log('Resource updated');
 * }
 * ```
 */
export const put = (
  url: RequestInfo | URL,
  options?: Omit<HttpOptions, 'method'>
): Promise<Response> => http(url, { ...options, method: 'PUT' });
