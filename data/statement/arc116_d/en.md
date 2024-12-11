Score : $500$ points

## Problem Statement

Given are integers $N$ and $M$.
How many sequences $A$ of $N$ integers satisfy the following conditions?

- $0 \leq A_i \left(i = 1, 2, \ldots, N\right)$
- $\sum_{i = 1}^{N} A_i = M$
- $A_1$ xor $A_2$ xor $\cdots$ xor $A_N = 0$ ("xor" denotes the bitwise XOR.)

Since the answer can be enormous, report it modulo $998244353$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 5000$
- $1 \leq M \leq 5000$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
5 20
```

```output1
475
```

Some of the sequences $A$ satisfying the conditions follow:

- $A = \left(10, 0, 10, 0, 0\right)$
- $A = \left(1, 2, 3, 7, 7\right)$

```input2
10 5
```

```output2
0
```

```input3
3141 2718
```

```output3
371899128
```