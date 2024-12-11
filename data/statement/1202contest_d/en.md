Score : $100$ points

## Problem Statement

You have a pair of integer sequences $A=(A_1, A_2, \dots, A_N), B=(B_1, B_2, \dots, B_N)$. Initially $A_i=B_i=0$ holds for all $i = 1, 2, \dots, N$.  

You will perform the following operation $M$ times.

- **Operation**: Choose two integers $i, j\ (1 \le i, j \le N)$ and increment $A_i$ and $B_j$ by $1$.

Here, out of the $M$ operations, the number of operations in which $i=j$ holds must be **exactly** $X$.

Find the number, modulo $998244353$, of pairs of integer sequences that $A, B$ can be after the $M$ operations.

## Constraints

- $2 \leq N \leq 3000$
- $0 \leq X \leq M \le 3000$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N \ M \ X$

## Output

Print the number, modulo $998244353$, of pairs of integer sequences that $A, B$ can be after the $M$ operations.

```input1
3 1 1
```

```output1
3
```

The following $3$ pairs are possible.

- $A=(1,0,0), \ B=(1,0,0)$
- $A=(0,1,0), \ B=(0,1,0)$
- $A=(0,0,1), \ B=(0,0,1)$

```input2
3 1 0
```

```output2
6
```

The following $6$ pairs are possible.

- $A=(1,0,0), \ B=(0,1,0)$
- $A=(1,0,0), \ B=(0,0,1)$
- $A=(0,1,0), \ B=(1,0,0)$
- $A=(0,1,0), \ B=(0,0,1)$
- $A=(0,0,1), \ B=(1,0,0)$
- $A=(0,0,1), \ B=(0,1,0)$

```input3
4 4 2
```

```output3
643
```

The followings are examples of possible pairs.

- $A=(1,1,1,1), \ B=(1,1,1,1)$
- $A=(1,0,0,3), \ B=(0,1,0,3)$

```input4
314 1592 653
```

```output4
755768689
```