Score: $400$ points

## Problem Statement

The Kingdom of Takahashi has $N$ towns, numbered $1$ through $N$.

There is one teleporter in each town. The teleporter in Town $i$ $(1 \leq i \leq N)$ sends you to Town $A_i$.

Takahashi, the king, loves the positive integer $K$. The selfish king wonders what town he will be in if he starts at Town $1$ and uses a teleporter exactly $K$ times from there.

Help the king by writing a program that answers this question.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$
- $1 \leq K \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the integer representing the town the king will be in if he starts at Town $1$ and uses a teleporter exactly $K$ times from there.

```input1
4 5
3 2 4 1
```

```output1
4
```

If we start at Town $1$ and use the teleporter $5$ times, our travel will be as follows: $1 \to 3 \to 4 \to 1 \to 3 \to 4$.

```input2
6 727202214173249351
6 5 2 5 3 2
```

```output2
2
```