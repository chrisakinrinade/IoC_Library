// Database interface
export interface Database {
  query(...args): Promise<{}>
}