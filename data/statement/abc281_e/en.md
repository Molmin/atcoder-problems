Score : $500$ points

## Problem Statement

You are given an integer sequence $A = (A_1, \dots, A_N)$ of length $N$, and integers $M$ and $K$.<br>
For each $i = 1, \dots, N - M + 1$, solve the following independent problem.

Find the sum of the first $K$ values in the sorted list of the $M$ integers $A_i, A_{i + 1}, \dots, A_{i + M - 1}$ in ascending order.

## Constraints

- $1 \leq K \leq M \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Let $\mathrm{answer}_k$ be the answer to the problem for $i = k$, and print them in the following format:

> $\mathrm{answer}_1$ $\mathrm{answer}_2$ $\ldots$ $\mathrm{answer}_{N-M+1}$

```input1
6 4 3
3 1 4 1 5 9
```

```output1
5 6 10
```

- For $i = 1$, sorting $A_i, A_{i+1}, A_{i+2}, A_{i+3}$ in ascending order yields $1, 1, 3, 4$, where the sum of the first three values is $5$.
- For $i = 2$, sorting $A_i, A_{i+1}, A_{i+2}, A_{i+3}$ in ascending order yields $1, 1, 4, 5$, where the sum of the first three values is $6$.
- For $i = 3$, sorting $A_i, A_{i+1}, A_{i+2}, A_{i+3}$ in ascending order yields $1, 4, 5, 9$, where the sum of the first three values is $10$.

```input2
10 6 3
12 2 17 11 19 8 4 3 6 20
```

```output2
21 14 15 13 13
```