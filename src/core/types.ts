/**
 * Supported HTTP methods for type-safe requests
 */
export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS';

/**
 * Next.js-specific fetch options for enhanced caching
 */
export interface NextFetchOptions {
  /** Revalidate cache after specified seconds */
  revalidate?: number;
  /** Tags for cache invalidation or revalidation */
  tags?: string[];
  /** Cache behavior for the request */
  cache?: 'force-cache' | 'no-store' | 'default';
}

/**
 * Type-safe HTTP headers with autocomplete support
 */
export interface KnownHeaders {
  Accept?: '*/*';
  'User-Agent'?: string;
  Referer?: string;
  Origin?: string;
  'X-Requested-With'?: string;
  'X-Forwarded-For'?: string;
  'Cache-Control'?: string;
  'If-Modified-Since'?: string;
  'If-None-Match'?: string;
  'Content-Type'?:
    | 'application/x-www-form-urlencoded'
    | 'application/json'
    | 'text/plain'
    | 'text/html'
    | 'application/javascript'
    | 'application/xml'
    | 'multipart/form-data'
    | 'application/octet-stream'
    | 'application/pdf'
    | 'application/ld+json';
  'Content-Language'?: string;
  'Accept-Language'?: string;
  'Authentication-Info'?: string;
  Authorization?: string;
  'WWW-Authenticate'?: string;
  'Proxy-Authenticate'?: string;
  'Authentication-Control'?: string;
  Cookie?: string;
  'Set-Cookie'?: string;
  'X-Page'?: string;
}

/**
 * Enhanced fetch options with timeout, delay, and Next.js support
 */
export interface HttpOptions extends Omit<RequestInit, 'method' | 'headers'> {
  /** HTTP method to use (default: 'GET') */
  method?: HttpMethod;
  /** Maximum time in milliseconds before aborting request */
  timeout?: number;
  /** Delay in milliseconds before starting request (throttling) */
  delay?: number;
  /** Next.js-specific fetch options */
  next?: NextFetchOptions;
  /** Headers to include in the request */
  headers?: HeadersInit | (KnownHeaders & Record<string, string>);
}
