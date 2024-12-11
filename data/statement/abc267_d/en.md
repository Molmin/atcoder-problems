Score : $400$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\dots,A_N)$ of length $N$.

Find the maximum value of $\displaystyle \sum_{i=1}^{M} i \times B_i$ for a (not necessarily contiguous) subsequence $B=(B_1,B_2,\dots,B_M)$ of length $M$ of $A$.

## Notes

A **subsequence** of a number sequence is a sequence that is obtained by removing $0$ or more elements from the original number sequence and concatenating the remaining elements without changing the order.

For example, $(10,30)$ is a subsequence of $(10,20,30)$, but $(20,10)$ is not a subsequence of $(10,20,30)$.

## Constraints

- $1 \le M \le N \le 2000$
- $- 2 \times 10^5 \le A_i \le 2 \times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
4 2
5 4 -1 8
```

```output1
21
```

When $B=(A_1,A_4)$, we have $\displaystyle \sum_{i=1}^{M} i \times B_i = 1 \times 5 + 2 \times 8 = 21$.  Since it is impossible to achieve $22$ or a larger value, the solution is $21$.

```input2
10 4
-3 1 -4 1 -5 9 -2 6 -5 3
```

```output2
54
```