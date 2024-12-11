Score: $300$ points

## Problem Statement

You are given a permutation $A=(A_1,\ldots,A_N)$ of $(1,2,\ldots,N)$.<br>
Transform $A$ into $(1,2,\ldots,N)$ by performing the following operation between $0$ and $N-1$ times, inclusive:

- Operation: Choose any pair of integers $(i,j)$ such that $1\leq i &lt; j \leq N$. Swap the elements at the $i$-th and $j$-th positions of $A$.

It can be proved that under the given constraints, it is always possible to transform $A$ into $(1,2,\ldots,N)$.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $(A_1,\ldots,A_N)$ is a permutation of $(1,2,\ldots,N)$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Let $K$ be the number of operations. Print $K+1$ lines.<br>
The first line should contain $K$.<br>
The $(l+1)$-th line ($1\leq l \leq K$) should contain the integers $i$ and $j$ chosen for the $l$-th operation, separated by a space.<br>
Any output that satisfies the conditions in the problem statement will be considered correct.

```input1
5
3 4 1 2 5
```

```output1
2
1 3
2 4
```

The operations change the sequence as follows:

- Initially, $A=(3,4,1,2,5)$.
- The first operation swaps the first and third elements, making $A=(1,4,3,2,5)$.
- The second operation swaps the second and fourth elements, making $A=(1,2,3,4,5)$.

Other outputs such as the following are also considered correct:

```output1
4
2 3
3 4
1 2
2 3
```

```input2
4
1 2 3 4
```

```output2
0
```

```input3
3
3 1 2
```

```output3
2
1 2
2 3
```