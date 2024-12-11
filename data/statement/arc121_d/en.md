Score : $700$ points

## Problem Statement

Snuke has a blackboard and $N$ candies.
The *tastiness* of the $i$-th candy is $a_i$.

He will repeat the operation below until he has no more candy.

- Choose one or two of his candies and eat them (of course, they disappear). Then, write on the blackboard the total tastiness of the candies he has just chosen.

Snuke wants to minimize $X-Y$, where $X$ and $Y$ are the largest and smallest values written on the blackboard, respectively.
Find the minimum possible value of $X-Y$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 5000$
- $-10^{9} \leq a_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_{1}$ $a_{2}$ $\cdots$ $a_N$

## Output

Print the minimum possible value of $X-Y$, where $X$ and $Y$ are the largest and smallest values written on the blackboard, respectively.

```input1
3
1 2 4
```

```output1
1
```

- One optimal sequence of operations is to eat the candies with the tastinesses of $1$ and $2$ in the first operation, and then eat the candies with the tastiness of $4$ in the second operation.

```input2
2
-100 -50
```

```output2
0
```

- It is optimal to eat both candies with the tastiness of $-100$ and $-50$ in the first operation.

```input3
20
-18 31 -16 12 -44 -5 24 17 -37 -31 46 -24 -2 11 32 16 0 -39 35 38
```

```output3
13
```