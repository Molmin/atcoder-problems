Score : $1400$ points

## Problem Statement

Count the number of strings $S$ that satisfy the following constraints, modulo $10^9 + 7$.

- The length of $S$ is exactly $N$.
- $S$ consists of digits (`0`...`9`).
- You are given $Q$ intervals.
For each $i (1 \leq i \leq Q)$, the integer represented by $S[l_i \ldots r_i]$ (the substring of $S$ between the $l_i$-th ($1$-based) character and the $r_i$-th character, inclusive) must be a multiple of $9$.

Here, the string $S$ and its substrings may have leading zeroes.
For example, `002019` represents the integer $2019$.

## Constraints

- $1 \leq N \leq 10^9$
- $1 \leq Q \leq 15$
- $1 \leq l_i \leq r_i \leq N$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $Q$
> 
> $l_1$ $r_1$
> 
> $:$
> 
> $l_Q$ $r_Q$

## Output

Print the number of strings that satisfy the conditions, modulo $10^9 + 7$.

```input1
4
2
1 2
2 4
```

```output1
136
```

For example, $S =$`9072` satisfies the conditions because both $S[1 \ldots 2] =$`90` and $S[2 \ldots 4] =$`072` represent multiples of $9$.

```input2
6
3
2 5
3 5
1 3
```

```output2
2720
```

```input3
20
10
2 15
5 6
1 12
7 9
2 17
5 15
2 4
16 17
2 12
8 17
```

```output3
862268030
```