Score : $1000$ points

## Problem Statement

Given are integers $N$ and $M$.
Find the number, modulo $(10^9+7)$, of length-$N$ sequences $(A_1,A_2,\ldots,A_N)$ that consist of non-negative integers and satisfy the following conditions:

- $A_1+A_2+\ldots +A_N = M$;
- For every $i$ ($2 \leq i \leq N-1$), $2 A_i \leq A_{i-1} + A_{i+1}$.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the number, modulo $(10^9+7)$, of sequences that satisfy the conditions.

```input1
3 3
```

```output1
7
```

The following seven sequences satisfy the conditions.

- $0,0,3$
- $0,1,2$
- $1,0,2$
- $1,1,1$
- $2,0,1$
- $2,1,0$
- $3,0,0$

```input2
10 100
```

```output2
10804516
```

```input3
10000 100000
```

```output3
694681734
```