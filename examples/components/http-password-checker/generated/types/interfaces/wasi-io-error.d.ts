declare module 'wasi:io/error@0.2.2' {
  
  export class Error {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    toDebugString(): string;
  }
}
