Score : $300$ points

## Problem Statement

Snuke and Raccoon have a heap of $N$ cards. The $i$-th card from the top has the integer $a_i$ written on it.

They will share these cards.
First, Snuke will take some number of cards from the top of the heap, then Raccoon will take all the remaining cards.
Here, both Snuke and Raccoon have to take at least one card.

Let the sum of the integers on Snuke's cards and Raccoon's cards be $x$ and $y$, respectively.
They would like to minimize $|x-y|$.
Find the minimum possible value of $|x-y|$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $-10^{9} \leq a_i \leq 10^{9}$
- $a_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_{N}$

## Output

Print the answer.

```input1
6
1 2 3 4 5 6
```

```output1
1
```

If Snuke takes four cards from the top, and Raccoon takes the remaining two cards, $x=10$, $y=11$, and thus $|x-y|=1$. This is the minimum possible value.

```input2
2
10 -10
```

```output2
20
```

Snuke can only take one card from the top, and Raccoon can only take the remaining one card. In this case, $x=10$, $y=-10$, and thus $|x-y|=20$.