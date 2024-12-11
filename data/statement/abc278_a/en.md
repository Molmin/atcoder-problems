Score : $100$ points

## Problem Statement

You are given a sequence $A = (A_1, A_2, \dots, A_N)$ of length $N$.<br>
You perform the following operation exactly $K$ times:

- remove the initial element of $A$ and append a $0$ to the tail of $A$.

Print all the elements of $A$ after the operations.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq K \leq 100$
- $1 \leq A_i \leq 100$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the elements of $A$ after the operations in one line, separated by spaces.

```input1
3 2
2 7 8
```

```output1
8 0 0
```

Before the operations, $A = (2, 7, 8)$.<br>
After performing the operation once, $A = (7, 8, 0)$.<br>
After performing the operation twice, $A = (8, 0, 0)$.<br>
Thus, $(8, 0, 0)$ is the answer.

```input2
3 4
9 9 9
```

```output2
0 0 0
```

```input3
9 5
1 2 3 4 5 6 7 8 9
```

```output3
6 7 8 9 0 0 0 0 0
```