Score : $1400$ points

## Problem Statement

Process the $Q$ queries below.

- You are given two integers $A_i$ and $M_i$. Determine whether there exists a positive integer $K_i$ not exceeding $2 \times 10^{18}$ such that $A_i^{K_i} \equiv K_i$ $(mod$ $M_i)$, and find one if it exists.

## Constraints

- $1 \leq Q \leq 100$
- $0 \leq A_i \leq 10^9(1 \leq i \leq Q)$
- $1 \leq M_i \leq 10^9(1 \leq i \leq Q)$

## Inputs

Input is given from Standard Input in the following format:

```plain
$Q$
$A_1$ $M_1$
:
$A_Q$ $M_Q$
```

## Outputs

In the $i$-th line, print $-1$ if there is no integer $K_i$ that satisfies the condition.
Otherwise, print an integer $K_i$ not exceeding $2 \times 10^{18}$ such that $A_i^{K_i} \equiv K_i$ $(mod$ $M_i)$. If there are multiple solutions, any of them will be accepted.

```input1
4
2 4
3 8
9 6
10 7
```

```output1
4
11
9
2
```

It can be seen that the condition is satisfied: $2^4 = 16 \equiv 4$ $(mod$ $4)$, $3^{11} = 177147 \equiv 11$ $(mod$ $8)$, $9^9 = 387420489 \equiv 9$ $(mod$ $6)$ and $10^2 = 100 \equiv 2$ $(mod$ $7)$.

```input2
3
177 168
2028 88772
123456789 987654321
```

```output2
7953
234831584
471523108231963269
```