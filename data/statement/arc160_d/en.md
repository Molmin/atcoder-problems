Score : $700$ points

## Problem Statement

Find the number, modulo $998244353$, of sequences of $N$ non-negative integers $A=(A_1,A_2,\dots,A_N)$ totaling $M$ that satisfy the following condition.

- It is possible to make all elements of $A$ equal $0$ by repeatedly choosing one of the following operations and performing it.-   - Choose an integer $i$ such that $1 \le i \le N$ and decrease $A_i$ by $K$.
-   - Choose an integer $i$ such that $1 \le i \le N-K+1$ and decrease each of $A_i,A_{i+1},\dots,A_{i+K-1}$ by $1$.

## Constraints

- $1 \le K \le N \le 2000$
- $1 \le M \le 10^{18}$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

Print the answer.

```input1
3 2 2
```

```output1
5
```

The following five sequences satisfy the requirements.

- $(1,1,0)$
- $(0,1,1)$
- $(2,0,0)$
- $(0,2,0)$
- $(0,0,2)$

For instance, if $A=(0,1,1)$, you can do the following to make all elements of $A$ equal $0$.

- Perform the second operation. Choose $i = 2$ to decrease each of $A_2$ and $A_3$ by $1$, making $A=(0,0,0)$.

```input2
100 998244353 100
```

```output2
0
```

There may be no sequence that satisfies the requirements.

```input3
2000 545782618661124208 533
```

```output3
908877889
```