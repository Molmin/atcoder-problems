Score: $100$ points

## Problem Statement

Takahashi will have $N$ penalty kicks in a soccer match.

For the $i$-th penalty kick, he will fail if $i$ is a multiple of $3$, and succeed otherwise.

Print the results of his penalty kicks.

## Constraints

- $1 \leq N \leq 100$
- All inputs are integers.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print a string of length $N$ representing the results of Takahashi's penalty kicks. The $i$-th character $(1 \leq i \leq N)$ should be `o` if Takahashi succeeds in the $i$-th penalty kick, and `x` if he fails.

```input1
7
```

```output1
ooxooxo
```

Takahashi fails the third and sixth penalty kicks, so the third and sixth characters will be `x`.

```input2
9
```

```output2
ooxooxoox
```