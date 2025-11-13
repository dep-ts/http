import { http } from './http.ts';
import { HttpOptions } from './types.ts';

/**
 * Performs an HTTP DELETE request to the specified URL
 * @param url - The URL or RequestInfo to send the DELETE request to
 * @param options - Configuration options excluding method (automatically set to 'DELETE')
 * @returns Promise resolving to Response object
 * @throws {Error} When request fails due to network issues or timeout
 * @example
 * ```typescript
 * // Delete a resource
 * const response = await del('https://api.example.com/users/123');
 *
 * // Delete with authentication and timeout
 * const result = await del('https://api.example.com/posts/456', {
 *   headers: { 'Authorization': 'Bearer token' },
 *   timeout: 5000
 * });
 *
 * if (response.ok) {
 *   console.log('Resource deleted successfully');
 * }
 * ```
 */
export const del = (
  url: RequestInfo | URL,
  options?: Omit<HttpOptions, 'method'>
): Promise<Response> => http(url, { ...options, method: 'DELETE' });
