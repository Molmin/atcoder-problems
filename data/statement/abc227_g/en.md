Score : $600$ points

## Problem Statement

Find the number, modulo $998244353$, of positive divisors of a binomial coefficient $\displaystyle \binom{N}{K}$.

## Constraints

- $1 \leq N \leq 10^{12}$
- $0 \leq K \leq \min(10^6,N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the answer.

```input1
5 2
```

```output1
4
```

We have $\displaystyle \binom{5}{2}=10$, which has four positive divisors: $1,2,5,10$.

```input2
103 3
```

```output2
8
```

We have $\displaystyle \binom{103}{3}=176851$, which has eight positive divisors.

```input3
1000000000000 1000000
```

```output3
110520107
```