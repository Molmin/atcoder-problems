Score : $600$ points

## Problem Statement

Takahashi is playing sugoroku.

The board has $N+1$ squares numbered $0$ to $N$.
Takahashi starts at Square $0$ and head to Square $N$.

In this sugoroku, we use a wheel showing numbers from $1$ through $M$ with equal probability.
In each turn, Takahashi spins the wheel and advances by the number shown by the wheel. When it makes him reach Square $N$ or go past it, he wins.

Some of the squares send him to Square $0$ when he stops on them.
There are $K$ such squares: Square $A_1, \ldots, A_K$.

Find the expected value of the number of times Takahashi spins the wheel before he wins.
If it is impossible to win, print `-1` instead.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $0 \leq K \leq 10$
- $0 &lt; A_1 &lt; \ldots &lt; A_K &lt; N$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $\ldots$ $A_K$

## Output

Print the expected value of the number of times Takahashi spins the wheel before he wins.
Your output is considered as correct when its absolute or relative error from our answer is at most $10^{-3}$.
If it is impossible to win, print `-1` instead.

```input1
2 2 0
```

```output1
1.5000
```

If the wheel shows $1$ in the first spin, he will need two spins to win; if the wheel shows $2$ in the first spin, he will need one spin to win. Thus, the expected number of spins is $1.5$.

```input2
2 2 1
1
```

```output2
2.0000
```

If the wheel shows $1$, he advances to Square $1$, but it sends him back to Square $0$.<br>
Thus, he keeps spinning the wheel until he gets $2$ and wins.<br>
The probability that he gets $2$ for the first time in the $i$-th spin is $\frac{1}{2^i}$, so the expected number of spins is $\sum_{i = 1}^{\infty} (i \times \frac{1}{2^i}) = 2$.

```input3
100 6 10
11 12 13 14 15 16 17 18 19 20
```

```output3
-1
```

```input4
100000 2 2
2997 92458
```

```output4
201932.2222
```