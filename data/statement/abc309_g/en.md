Score : $575$ points

## Problem Statement

Find the number, modulo $998244353$, of permutations $P=(P_1,P_2,\dots,P_N)$ of $(1,2,\dots,N)$ such that:

- $|P_i - i| \ge X$ for all integers $i$ with $1 \le i \le N$.

## Constraints

- $1 \le N \le 100$
- $1 \le X \le 5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$

## Output

Print the answer.

```input1
3 1
```

```output1
2
```

The conforming permutations $P=(P_1,P_2,P_3)$ are the following two, $(2,3,1)$ and $(3,1,2)$, so the answer is $2$.

```input2
5 2
```

```output2
4
```

```input3
98 5
```

```output3
809422418
```