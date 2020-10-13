
const id = x => x;
const konst = x => y => x;
const snd = x => y => y;

// const and = a => b => a(b(T)(F))(a(F)(F));
// const and = a => b => a(b(T)(F))(F);
// const and = a => b => a(b(T)(F))(a);
// const and = a => b => a(b)(a);
const and = a => b => a(b)(a);

// const or = a => b => a(b(T)(T))(b(T)(F));
// const or = a => b => a(T)(b(T)(F));
// const or = a => b => a(a)(b(T)(F));
const or = a => b => a(a)(b);

// const not = a => b => a(b(F)(F))(b(F)(T));
const not = a => b => a(F)(b(F)(T));

// const xor = a => b => a(b(F)(T))(b(T)(F));
// const xor = a => b => a(b(F)(T))(b);
const xor = a => b => a(b(F)(T))(b);

const fst = konst;
const K = konst;
const KI = snd;
const T = fst;
const F = snd;
const beq = xor;

const Pair = x => y => f => f(x)(y);
const firstname = fst;
const lastname = snd;

const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
// const either = e => f => g => e(f)(g);
const either = id ;




// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




