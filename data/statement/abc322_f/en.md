Score : $550$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `0` and `1`. Let $S_i$ denote the $i$-th character of $S$.

Process $Q$ queries in the order they are given.<br>
Each query is represented by a tuple of three integers $(c, L, R)$, where $c$ represents the type of the query.

- When $c=1$: For each integer $i$ such that $L \leq i \leq R$, if $S_i$ is `1`, change it to `0`; if it is `0`, change it to `1`.
- When $c=2$: Let $T$ be the string obtained by extracting the $L$-th through $R$-th characters of $S$. Print the maximum number of consecutive `1`s in $T$.

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $1 \leq Q \leq 10^5$
- $S$ is a string of length $N$ consisting of `0` and `1`.
- $c \in \lbrace 1, 2 \rbrace$
- $1 \leq L \leq R \leq N$
- $N$, $Q$, $c$, $L$, and $R$ are all integers.

## Input

The input is given from Standard Input in the following format, where $\mathrm{query}_i$ represents the $i$-th query:

> $N$ $Q$
> 
> $S$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Each query is given in the following format:

> $c$ $L$ $R$

## Output

Let $k$ be the number of queries with $c=2$. Print $k$ lines.<br>
The $i$-th line should contain the answer to the $i$-th query with $c=2$.

```input1
7 6
1101110
2 1 7
2 2 4
1 3 6
2 5 6
1 4 7
2 1 7
```

```output1
3
1
0
7
```

The queries are processed as follows.

- Initially, $S=$ `1101110`.
- For the first query, $T =$ `1101110`. The longest sequence of consecutive `1`s in $T$ is `111` from the $4$-th character to $6$-th character, so the answer is $3$.
- For the second query, $T =$ `101`. The longest sequence of consecutive `1`s in $T$ is `1` at the $1$-st or $3$-rd character, so the answer is $1$.
- For the third query, the operation changes $S$ to `1110000`.
- For the fourth query, $T =$ `00`. $T$ does not contain `1`, so the answer is $0$.
- For the fifth query, the operation changes $S$ to `1111111`.
- For the sixth query, $T =$ `1111111`. The longest sequence of consecutive `1`s in $T$ is `1111111` from the $1$-st to $7$-th characters, so the answer is $7$.