Score : $600$ points

## Problem Statement

A sequence $a = (a_1, \ldots, a_n)$ consisting of positive integers is said to be **generatable** when one can obtain $a$ by repeating the following operation on an empty sequence.

- Operation: Choose a positive integer $k$, and insert $(1, 2, \ldots, k-1, k)$ into some position in the sequence. More formally, for a sequence $a = (a_1, \ldots, a_m)$, choose an integer $i$ such that $0\leq i\leq m$ and a positive integer $k$, and replace $a$ with $(a_1,\ldots,a_{i}, 1, 2, \ldots, k-1, k, a_{i+1}, \ldots, a_m)$.

For instance, $a = (1,2,1,1,2,1,3,4,2,3)$ is generatable. Here is one way to generate it:

$() \to (\boldsymbol{1,2}) \to (1,2,\boldsymbol{1,2,3}) \to (1,2,1,\boldsymbol{1,2,3,4},2,3) \to (1,2,1,1,2,\boldsymbol{1},3,4,2,3).$

You are given a sequence $A = (A_1, \ldots, A_N)$ consisting of positive integers. Find the number of pairs of integers $(L, R)$ such that:

- $1\leq L\leq R\leq N$ and the contiguous subsequence $(A_L, \ldots, A_R)$ is generatable.

## Constraints

- $1\leq N\leq 5\times 10^5$
- $1\leq A_i\leq N$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the number of pairs of integers $(L, R)$ satisfying the conditions.

```input1
6
1 2 1 2 1 3
```

```output1
11
```

Here are the $11$ sought pairs:

- $(1,1), (1,2), (1,3), (1,4), (1,5), (1,6), (3,3), (3,4), (3,5), (3,6), (5,5).$

```input2
5
1 1 1 1 1
```

```output2
15
```

All the contiguous subsequences are generatable.

```input3
7
1 2 1 2 1 3 4
```

```output3
13
```