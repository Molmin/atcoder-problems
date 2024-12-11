Score : $600$ points

## Problem Statement

There is an arithmetic progression with $L$ terms: $s_0, s_1, s_2, ... , s_{L-1}$.

The initial term is $A$, and the common difference is $B$. That is, $s_i = A + B \times i$ holds.

Consider the integer obtained by concatenating the terms written in base ten without leading zeros. For example, the sequence $3, 7, 11, 15, 19$ would be concatenated into $37111519$. What is the remainder when that integer is divided by $M$?

## Constraints

- All values in input are integers.
- $1 \leq L, A, B &lt; 10^{18}$
- $2 \leq M \leq 10^9$
- All terms in the arithmetic progression are less than $10^{18}$.

## Input

Input is given from Standard Input in the following format:

> $L$ $A$ $B$ $M$

## Output

Print the remainder when the integer obtained by concatenating the terms is divided by $M$.

```input1
5 3 4 10007
```

```output1
5563
```

Our arithmetic progression is $3, 7, 11, 15, 19$, so the answer is $37111519$ mod $10007$, that is, $5563$.

```input2
4 8 1 1000000
```

```output2
891011
```

```input3
107 10000000000007 1000000000000007 998244353
```

```output3
39122908
```