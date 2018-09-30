importScripts('base_primes.js', 'js_primes.js', 'js_typed_primes.js', 'wasm_primes.js');

const implementations = {
  'js': JsPrimes,
  'js_typed': JsTypedPrimes,
  'wasm': WasmPrimes
};

onmessage = ({data}) => {
  const implementation = implementations[data.implementation];
  new implementation(data.length, (result) => {
    postMessage({...data, result});
  }).initialize();
}
