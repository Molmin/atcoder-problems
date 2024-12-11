Score : $1000$ points

## Problem Statement

You are given a sequence $A = (A_1, \ldots, A_N)$ of length $N$. Here, $N$ is an integer not less than $3$.

You can perform the following operation any number of times (zero or more).

- Choose an integer $i$ satisfying $1 \leq i \leq N$ and $A_i = A_{i+1} = A_{i+2}$. Replace two of $A_i$, $A_{i+1}$, and $A_{i+2}$ with integers between $1$ and $N$, inclusive. Here, assume $A_{N+1} = A_1$ and $A_{N+2} = A_2$.

Find the number, modulo $998244353$, of possible resulting sequences $A$ that are permutations of $(1, \ldots, N)$.

## Constraints

- All input numbers are integers.
- $3 \leq N \leq 5 \times 10^5$
- $1 \leq A_i \leq N$

## Input

The input is given from Standard Input in the following format:

> $N$ 
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
6
1 2 3 3 1 1
```

```output1
360
```

For example, we can obtain the permutation $A = (1,2,4,3,5,6)$ through the following steps.

- Perform the operation with $i=5$. Replace $A_5$ with $3$ and $A_6$ with $6$. Now, $A = (1,2,3,3,3,6)$.
- Perform the operation with $i=3$. Replace $A_3$ with $4$ and $A_5$ with $5$. Now, $A = (1,2,4,3,5,6)$.

There are $360$ possible resulting sequences $A$ that are permutations of $(1, \ldots, 6)$.

```input2
5
3 1 3 4 1
```

```output2
0
```

There are no possible resulting sequences $A$ that are permutations of $(1, \ldots, 5)$.

```input3
10
1 1 1 8 8 8 7 7 7 10
```

```output3
604800
```