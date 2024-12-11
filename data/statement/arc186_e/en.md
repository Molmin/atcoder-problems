Score : $1000$ points

## Problem Statement

You are given a sequence of integers $(X_1,\dots,X_M)$ of length $M$ consisting of $1,\dots,K$.

Find the number of sequences $(A_1,\dots,A_N)$ of length $N$ consisting of $1,\dots,K$ that satisfy the following condition, modulo $998244353$:

- Among all sequences of length $M$ consisting of $1,\dots,K$, the only sequence that cannot be obtained as a (not necessarily contiguous) subsequence of $(A_1,\dots,A_N)$ is $(X_1,\dots,X_M)$.

## Constraints

- $2\le M,K \le N \le 400$
- $1\le X_i \le K$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $X_1$ $X_2$ $\dots$ $X_M$

## Output

Print the number of sequences satisfying the condition, modulo $998244353$.

```input1
5 2 3
1 1
```

```output1
4
```

The following four sequences satisfy the condition:

- $(2, 3, 1, 2, 3)$
- $(2, 3, 1, 3, 2)$
- $(3, 2, 1, 2, 3)$
- $(3, 2, 1, 3, 2)$

```input2
400 3 9
1 8 6
```

```output2
417833302
```

```input3
29 3 10
3 3 3
```

```output3
495293602
```

```input4
29 3 10
3 3 4
```

```output4
0
```