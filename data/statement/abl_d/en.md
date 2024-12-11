Score : $400$ points

## Problem Statement

You are given a sequence $A_1, A_2, ..., A_N$ and an integer $K$.

Print the maximum possible length of a sequence $B$ that satisfies the following conditions:

- $B$ is a (not necessarily continuous) subsequence of $A$.
- For each pair of adjacents elements of $B$, the absolute difference of the elements is at most $K$.

## Constraints

- $1 \leq N \leq 300,000$
- $0 \leq A_i \leq 300,000$
- $0 \leq K \leq 300,000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$
> 
> $A_2$
> 
> $:$
> 
> $A_N$

## Output

Print the answer.

```input1
10 3
1
5
4
3
8
6
9
7
2
4
```

```output1
7
```

For example, $B = (1, 4, 3, 6, 9, 7, 4)$ satisfies the conditions.

- It is a subsequence of $A = (1, 5, 4, 3, 8, 6, 9, 7, 2, 4)$.
- All of the absolute differences between two adjacent elements ($|1-4|, |4-3|, |3-6|, |6-9|, |9-7|, |7-4|$) are at most $K = 3$.