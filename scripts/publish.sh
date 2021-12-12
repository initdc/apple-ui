#! /bin/sh

main(){
  set -e
  npm publish --registry=https://registry.npmjs.org/
}

main
