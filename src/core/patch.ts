import { http } from './http.ts';
import { HttpOptions } from './types.ts';

/**
 * Performs an HTTP PATCH request to partially update a resource
 * @param url - The URL or RequestInfo to send the PATCH request to
 * @param options - Configuration options excluding method (automatically set to 'PATCH')
 * @returns Promise resolving to Response object
 * @throws {Error} When request fails due to network issues or timeout
 * @example
 * ```typescript
 * // Partial update of a user
 * const response = await patch('https://api.example.com/users/123', {
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ name: 'New Name' })
 * });
 *
 * // PATCH with validation and timeout
 * const result = await patch('https://api.example.com/posts/456', {
 *   body: JSON.stringify({ title: 'Updated Title' }),
 *   timeout: 5000,
 *   headers: {
 *     'Content-Type': 'application/json',
 *     'Authorization': 'Bearer token'
 *   }
 * });
 * ```
 */
export const patch = (
  url: RequestInfo | URL,
  options?: Omit<HttpOptions, 'method'>
): Promise<Response> => http(url, { ...options, method: 'PATCH' });
