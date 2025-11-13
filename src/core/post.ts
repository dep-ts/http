import { http } from './http.ts';
import { HttpOptions } from './types.ts';

/**
 * Performs an HTTP POST request to create a new resource
 * @param url - The URL or RequestInfo to send the POST request to
 * @param options - Configuration options excluding method (automatically set to 'POST')
 * @returns Promise resolving to Response object
 * @throws {Error} When request fails due to network issues or timeout
 * @example
 * ```typescript
 * // Create a new user
 * const response = await post('https://api.example.com/users', {
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({
 *     name: 'Alice',
 *     email: 'alice@example.com'
 *   })
 * });
 *
 * // POST with form data
 * const formResponse = await post('https://api.example.com/upload', {
 *   body: new FormData(),
 *   headers: {
 *     'Authorization': 'Bearer token'
 *   }
 * });
 *
 * // POST with timeout and delay
 * const result = await post('https://api.example.com/process', {
 *   body: JSON.stringify({ data: 'to process' }),
 *   timeout: 10000,
 *   delay: 1000 // Wait 1 second before sending
 * });
 * ```
 */
export const post = (
  url: RequestInfo | URL,
  options?: Omit<HttpOptions, 'method'>
): Promise<Response> => http(url, { ...options, method: 'POST' });
