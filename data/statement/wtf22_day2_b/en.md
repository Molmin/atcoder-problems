Score : $1500$ points

## Problem Statement

You are given integers $N$ and $K$, and a permutation $P=(P_1,P_2,\cdots,P_N)$ of $(1,2,\cdots,N)$.

You can perform the following operation any number of times, possibly zero.

- Choose an integer $i$ ($1 \leq i \leq N-K+1$).
Swap the values of the two greatest elements among $P_i,P_{i+1},\cdots,P_{i+K-1}$.

Find the number, modulo $998244353$, of permutations that $P$ can be after your operations.

## Constraints

- $2 \leq K \leq N \leq 250000$
- $(P_1,P_2,\cdots,P_N)$ is a permutation of $(1,2,\cdots,N)$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## Output

Print the answer.

```input1
3 3
2 3 1
```

```output1
2
```

In this case, the operation can only be performed with $i=1$.

After one operation, the two greatest elements among $P_1,P_2,P_3$, which are $P_2=3$ and $P_1=2$, have their values swapped, and you have $P=(3,2,1)$.
After one more operation, you have $P=(2,3,1)$.

Thus, there are two permutations, $P=(2,3,1),(3,2,1)$, that $P$ can be after your operations.

```input2
3 2
1 3 2
```

```output2
6
```

```input3
10 5
1 2 3 4 5 6 7 8 9 10
```

```output3
144
```

```input4
20 5
8 13 6 11 20 3 12 18 17 4 10 1 7 16 19 5 2 15 14 9
```

```output4
1451520
```