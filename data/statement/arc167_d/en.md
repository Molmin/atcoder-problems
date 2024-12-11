Score : $700$ points

## Problem Statement

In this problem, when we say just a "permutation", it refers to a permutation of $(1,2,\dots,N)$.

You are given a permutation $P=(P_{1},P_{2},\dots,P_{N})$.

A permutation $Q=(Q_{1},Q_{2},\dots,Q_{N})$ is said to be a good permutation when the following holds.

- For every integer $1\leq x\leq N$, it is possible to make $x$ equal $1$ by repeating the substitution $x\leftarrow Q_{x}$ some number of times.

You want to make $P$ a good permutation by performing the following operation on $P$ zero or more times.

- Choose integers $i$ and $j$ such that $1\leq i\lt j \leq N$, and swap $P_{i}$ and $P_{j}$.

Let $M$ be the minimum number of times you must perform the operation to make $P$ a good permutation. Find the lexicographically smallest good permutation that can be obtained by performing the operation $M$ times on $P$.

For each input file, you have $T$ test cases to solve.

 What is lexicographical order on sequences?

A sequence $S = (S_1,S_2,\ldots,S_{|S|})$ is said to be **lexicographically smaller** than a sequence $T = (T_1,T_2,\ldots,T_{|T|})$ when one of the following 1. or 2. holds.
Here, $|S|$ and $|T|$ denote the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $(S_1,S_2,\ldots,S_{|S|}) = (T_1,T_2,\ldots,T_{|S|})$.
2. There is an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ that satisfies both of the following.
1.    - $(S_1,S_2,\ldots,S_{i-1}) = (T_1,T_2,\ldots,T_{i-1})$.
2.    - $S_i$ is smaller than $T_i$ (as a number).

## Constraints

- $1\leq T\leq 10^{5}$
- $2\leq N\leq 2\times 10^{5}$
- $(P_{1},P_{2},\dots ,P_{N})$ is a permutation of $(1,2,\dots ,N)$.
- For each input file, the sum of $N$ does not exceed $2\times 10^{5}$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_{1}$
> 
> $\text{case}_{2}$
> 
> $\vdots$
> 
> $\text{case}_{T}$

Each case is given in the following format:

> $N$
> 
> $P_{1}$ $P_{2}$ $\cdots$ $P_{N}$

## Output

Print $T$ lines.
The $i$-th line should contain the permutation that is the answer for $\text{case}_{i}$, separated by spaces.

```input1
5
4
2 1 4 3
5
2 1 3 4 5
2
1 2
2
2 1
9
4 3 6 2 7 1 9 8 5
```

```output1
2 3 4 1
2 3 4 5 1
2 1
2 1
4 3 5 2 7 1 8 9 6
```

For the first test case:

$P$ is not a good permutation. Swapping $P_{1}$ and $P_{3}$ makes $P=(4,1,2,3)$, which is a good permutation, so $M=1$.
Other than that, swapping $P_{2}$ and $P_{4}$ makes $P=(2,3,4,1)$, which is the lexicographically smallest good permutation that can be obtained in $M=1$ operation, so this is the answer.