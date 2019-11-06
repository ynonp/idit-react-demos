/*
1. export default function twice
   to define your default export
    import twice from './utils'

2. export function twice()
   defines a normal export
   import { twice, thrice } from './utils';
 */
export function twice(x) {
    return x * 2;
}

export function thrice(x) {
    return x * 3;
}

const x = {
    twice,
    thrice
};

export default x;