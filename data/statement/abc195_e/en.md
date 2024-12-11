Score : $500$ points

## Problem Statement

We have a string $S$ of length $N$ consisting of `0`, $\ldots$, `9`, and a string $X$ of length $N$ consisting of `A` and `T`. Additionally, there is a string $T$, which is initialized to an empty string.

Takahashi and Aoki will play a game using these. The game consists of $N$ rounds. In the $i$-th round $(1\leq i \leq N)$, the following happens:

- If $X_i$ is `A`, Aoki does the operation below; if $X_i$ is `T`, Takahashi does it.
- Operation: append $S_i$ or `0` at the end of $T$.

After $N$ operations, $T$ will be a string of length $N$ consisting of `0`, $\ldots$, `9`.
If $T$ is a multiple of $7$ as a base-ten number (after removing leading zeros), Takahashi wins; otherwise, Aoki wins.

Determine the winner of the game when the two players play optimally.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $S$ and $X$ have a length of $N$ each.
- $S$ consists of `0`, $\ldots$, `9`.
- $X$ consists of `A` and `T`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $X$

## Output

If Takahashi wins when the two players play optimally, print `Takahashi`; if Aoki wins, print `Aoki`.

```input1
2
35
AT
```

```output1
Takahashi
```

In the $1$-st round, Aoki appends `3` or `0` at the end of $T$. In the $2$-nd round, Takahashi appends `5` or `0` at the end of $T$.

If Aoki appends `3`, Takahashi can append `5` to make $T$ `35`, a multiple of $7$.

If Aoki appends `0`, Takahashi can append `0` to make $T$ `00`, a multiple of $7$.

Thus, Takahashi can always win.

```input2
5
12345
AAAAT
```

```output2
Aoki
```

```input3
5
67890
TTTTA
```

```output3
Takahashi
```

```input4
5
12345
ATATA
```

```output4
Aoki
```