Score : $600$ points

## Problem Statement

There is a grid with $H$ rows and $W$ columns where each square has one of the characters `X` and `Y` written on it.
Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.
The characters on the grid are given as $H$ strings $S_1, S_2, \dots, S_H$: the $j$-th character of $S_i$ is the character on square $(i, j)$.

For a path $P$ from square $(1, 1)$ to square $(H, W)$ obtained by repeatedly moving down or right to the adjacent square, the **score** is defined as follows.

- Let $\mathrm{str}(P)$ be the string of length $(H + W - 1)$ obtained by concatenating the characters on the squares visited by $P$ in the order they are visited.
- The score of $P$ is the **square of the number** of pairs of consecutive `Y`s in $\mathrm{str}(P)$.

There are $\displaystyle\binom{H + W - 2}{H - 1}$ such paths. Find the sum of the scores over all those paths, modulo $998244353$.

What is $\binom{N}{K}$?
$\displaystyle\binom{N}{K}$ is the binomial coefficient representing the number of ways to choose $K$ from $N$ distinct elements.

## Constraints

- $1 \leq H \leq 2000$
- $1 \leq W \leq 2000$
- $S_i \ (1 \leq i \leq H)$ is a string of length $W$ consisting of `X` and `Y`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_H$

## Output

Print the sum of the scores over all possible paths, modulo $998244353$.

```input1
2 2
YY
XY
```

```output1
4
```

There are two possible paths $P$: $(1, 1) \to (1, 2) \to (2, 2)$ and $(1, 1) \to (2, 1) \to (2, 2)$.

- For $(1, 1) \to (1, 2) \to (2, 2)$, we have $\mathrm{str}(P) = {}$`YYY`, with two pairs of consecutive `Y`s at positions $1, 2$ and $2, 3$, so the score is $2^2 = 4$.
- For $(1, 1) \to (2, 1) \to (2, 2)$, we have $\mathrm{str}(P) = {}$`YXY`, with no pairs of consecutive `Y`s , so the score is $0^2 = 0$.

Thus, the sought sum is $4 + 0 = 4$.

```input2
2 2
XY
YY
```

```output2
2
```

For either of the two possible paths $P$, we have $\mathrm{str}(P) = {}$`XYY`, for a score of $1^2 = 1$.

```input3
10 20
YYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYY
```

```output3
423787835
```

Print the sum of the scores modulo $998244353$.