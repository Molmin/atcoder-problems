Score : $300$ points

## Problem Statement

How many triples $A,B,C$ of integers between $L$ and $R$ (inclusive) satisfy $A-B=C$?

You will be given $T$ cases. Solve each of them.

## Constraints

- $1 \leq T \leq 2\times 10^4$
- $0\le L \le R \le 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $L$ $R$

## Output

Print $T$ values; the $i$-th of them should be the answer for $\text{case}_i$.

```input1
5
2 6
0 0
1000000 1000000
12345 67890
0 1000000
```

```output1
6
1
0
933184801
500001500001
```

In the first case, we have the following six triples:

- $4 - 2 = 2$
- $5 - 2 = 3$
- $5 - 3 = 2$
- $6 - 2 = 4$
- $6 - 3 = 3$
- $6 - 4 = 2$