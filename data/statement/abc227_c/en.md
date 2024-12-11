Score : $300$ points

## Problem Statement

You are given a positive integer $N$.

Find the number of triples of positive integers $(A, B, C)$ such that $A\leq B\leq C$ and $ABC\leq N$.

The Constraints guarantee that the answer is less than $2^{63}$.

## Constraints

- $1 \leq N \leq 10^{11}$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
4
```

```output1
5
```

There are five such triples: $(1,1,1),(1,1,2),(1,1,3),(1,1,4),(1,2,2)$.

```input2
100
```

```output2
323
```

```input3
100000000000
```

```output3
5745290566750
```