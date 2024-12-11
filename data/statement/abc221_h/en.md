Score : $600$ points

## Problem Statement

Given are positive integers $N$ and $M$.

For each $k=1,2,\ldots,N$, find the following number and print it modulo $998244353$.

- The number of multisets $A$ containing $k$ positive integers that satisfy both of the following conditions:-   - the sum of the elements of $A$ is $N$;
-   - for every positive integer $x$, $A$ contains at most $M$ occurrences of $x$.

## Constraints

- $1 \leq M \leq N \leq 5000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print $N$ lines; the $i$-th line $(1 \leq i \leq N)$ should contain the answer for the case $k=i$.

```input1
4 2
```

```output1
1
2
1
0
```

- For $k=1$, there is one multiset $A$ that satisfies the conditions: $\{4\}$.
- For $k=2$, there are two multisets $A$ that satisfy the conditions: $\{1,3\}$ and $\{2,2\}$.
- For $k=3$, there is one multiset $A$ that satisfies the conditions: $\{1,1,2\}$.
- For $k=4$, there is no multiset $A$ that satisfies the conditions.

```input2
7 7
```

```output2
1
3
4
3
2
1
1
```