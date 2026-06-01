/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest'

// Register H3 auto-imports as globals so server handler modules can be imported in tests
;(globalThis as any).defineEventHandler = (fn: any) => fn
;(globalThis as any).createError = ({ statusCode, message }: { statusCode: number; message: string }) => {
  const err = new Error(message) as any
  err.statusCode = statusCode
  return err
}
;(globalThis as any).readMultipartFormData = vi.fn()
