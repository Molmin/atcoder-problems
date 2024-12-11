Score : $200$ points

## Problem Statement

Takahashi has $N$ friends. They have nicknames: Friend $1$, Friend $2$, $\ldots$, Friend $N$.

One day, Takahashi accidentally let one of his friends, Friend $X$, learn his shameful secret.<br>
For each $i = 1, 2, \ldots, N$, when Friend $i$ learns the secret, he/she will share it with Friend $A_i$, if Friend $A_i$ has not already learned it.

How many of Takahashi's friends will learn the secret in the end?

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq X \leq N$
- $1 \leq A_i \leq N$
- $A_i \neq i$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
4 2
3 1 1 2
```

```output1
3
```

Takahashi's secret will be learned by Friend $1$, Friend $2$, and Friend $3$, as follows.

- One day, Takahashi let Friend $2$ learn the secret.
- Friend $2$ shares it with Friend $1$.
- Friend $1$ shares it with Friend $3$.

In the end, three of his friends learn the secret, so we print $3$.

```input2
20 12
7 11 10 1 7 20 14 2 17 3 2 5 19 20 8 14 18 2 10 10
```

```output2
7
```