Score : $500$ points

## Problem Statement

You are given $N$ strings $S_1, S_2, \ldots, S_N$ consisting of digits from `1` through `9` and the character `X`.

We will choose a permutation $P = (P_1, P_2, \ldots, P_N)$ of $(1, 2, \ldots, N)$
to construct a string $T = S_{P_1} + S_{P_2} + \cdots + S_{P_N}$, where $+$ denotes a concatenation of strings.

Then, we will calculate the "score" of the string $T = T_1T_2\ldots T_{|T|}$ (where $|T|$ denotes the length of $T$).<br>
The score is calculated by the following $9$ steps, starting from the initial score $0$:

- Add $1$ point to the score as many times as the number of integer pairs $(i, j)$ such that $1 \leq i \lt j \leq |T|$,  $T_i =$ `X`, and $T_j =$ `1`.
- Add $2$ points to the score as many times as the number of integer pairs $(i, j)$ such that $1 \leq i \lt j \leq |T|$,  $T_i =$ `X`, and $T_j =$ `2`.
- Add $3$ points to the score as many times as the number of integer pairs $(i, j)$ such that $1 \leq i \lt j \leq |T|$,  $T_i =$ `X`, and $T_j =$ `3`.
- $\cdots$
- Add $9$ points to the score as many times as the number of integer pairs $(i, j)$ such that $1 \leq i \lt j \leq |T|$,  $T_i =$ `X`, and $T_j =$ `9`.

Find the maximum possible score of $T$ when $P$ can be chosen arbitrarily.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $N$ is an integer.
- $S_i$ is a string of length at least $1$ consisting of digits from `1` through `9` and the character `X`.
- The sum of lengths of $S_1, S_2, \ldots, S_N$ is at most $2 \times 10^5$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer.

```input1
3
1X3
59
XXX
```

```output1
71
```

When $P = (3, 1, 2)$, we have $T = S_3 + S_1 + S_2 =$ `XXX1X359`.
Then, the score of $T$ is calculated as follows:

- there are $3$ integer pairs $(i, j)$ such that $1 \leq i \lt j \leq |T|$,  $T_i =$ `X`, and $T_j =$ `1`;
- there are $4$ integer pairs $(i, j)$ such that $1 \leq i \lt j \leq |T|$,  $T_i =$ `X`, and $T_j =$ `3`;
- there are $4$ integer pairs $(i, j)$ such that $1 \leq i \lt j \leq |T|$,  $T_i =$ `X`, and $T_j =$ `5`;
- there are $4$ integer pairs $(i, j)$ such that $1 \leq i \lt j \leq |T|$,  $T_i =$ `X`, and $T_j =$ `9`.

Therefore, the score of $T$ is $1 \times 3 + 3 \times 4 + 5 \times 4 + 9 \times 4 = 71$, which is the maximum possible value.

```input2
10
X63X395XX
X2XX3X22X
13
3716XXX6
45X
X6XX
9238
281X92
1XX4X4XX6
54X9X711X1
```

```output2
3010
```