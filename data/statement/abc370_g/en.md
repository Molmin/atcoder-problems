Score : $650$ points

## Problem Statement

We call a positive integer $n$ a good integer if and only if the sum of its positive divisors is divisible by $3$.<br>
You are given two positive integers $N$ and $M$. Find the number, modulo $998244353$, of length-$M$ sequences $A$ of positive integers such that the product of the elements in $A$ is a good integer not exceeding $N$.

## Constraints

- $1 \leq N \leq 10^{10}$
- $1 \leq M \leq 10^5$
- $N$ and $M$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
10 1
```

```output1
5
```

There are five sequences that satisfy the conditions:

- $(2)$
- $(5)$
- $(6)$
- $(8)$
- $(10)$

```input2
4 2
```

```output2
2
```

There are two sequences that satisfy the conditions:

- $(1, 2)$
- $(2, 1)$

```input3
370 907
```

```output3
221764640
```

```input4
10000000000 100000
```

```output4
447456146
```