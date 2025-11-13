import { http } from './http.ts';
import { HttpOptions } from './types.ts';

/**
 * Performs an HTTP GET request to retrieve data from the specified URL
 * @param url - The URL or RequestInfo to send the GET request to
 * @param options - Configuration options excluding method (automatically set to 'GET')
 * @returns Promise resolving to Response object
 * @throws {Error} When request fails due to network issues or timeout
 * @example
 * ```typescript
 * // Simple GET request
 * const response = await get('https://api.example.com/data');
 * const data = await response.json();
 *
 * // GET with headers and caching
 * const user = await get('https://api.example.com/users/1', {
 *   headers: { 'Authorization': 'Bearer token' },
 *   next: { revalidate: 300 } // Cache for 5 minutes
 * });
 *
 * // GET with timeout for unreliable APIs
 * const result = await get('https://slow-api.example.com/data', {
 *   timeout: 10000 // 10 second timeout
 * });
 * ```
 */
export const get = (
  url: RequestInfo | URL,
  options?: Omit<HttpOptions, 'method'>
): Promise<Response> => http(url, { ...options, method: 'GET' });
