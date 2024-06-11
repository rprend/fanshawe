
export interface SendQueryRequest {
  submission: string
}

export interface SendQueryResponse {
  message: string
}

// Make a generic type APIEvent which takes in another type (like SendQueryRequest) which defines the type of the body
export interface APIEvent<T> {
  status: number
  body: T
}