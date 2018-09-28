# wasm-primes

A simple example how prime numbers can be generated by C code compiled to WebAssembly.

Module was compiled using: https://wasdk.github.io/WasmFiddle/

Additional code to put into `primes.c` before compiling to wasm:
```c
int primes[100];

int* get_buffer_offset() {
  return &primes[0];
}
```