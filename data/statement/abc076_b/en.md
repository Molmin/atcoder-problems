Score : $200$ points

## Problem Statement

Square1001 has seen an electric bulletin board displaying the integer $1$.
He can perform the following operations A and B to change this value:

- Operation A: The displayed value is doubled.
- Operation B: The displayed value increases by $K$.

Square1001 needs to perform these operations $N$ times in total.
Find the minimum possible value displayed in the board after $N$ operations.

## Constraints

- $1 \leq N, K \leq 10$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $K$

## Output

Print the minimum possible value displayed in the board after $N$ operations.

```input1
4
3
```

```output1
10
```

The value will be minimized when the operations are performed in the following order: A, A, B, B.<br>
In this case, the value will change as follows: $1$ → $2$ → $4$ → $7$ → $10$.  

```input2
10
10
```

```output2
76
```

The value will be minimized when the operations are performed in the following order: A, A, A, A, B, B, B, B, B, B.<br>
In this case, the value will change as follows: $1$ → $2$ → $4$ → $8$ → $16$ → $26$ → $36$ → $46$ → $56$ → $66$ → $76$.  

By the way, this contest is AtCoder Beginner Contest 076.