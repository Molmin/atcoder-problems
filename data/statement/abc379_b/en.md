Score : $200$ points

## Problem Statement

Takahashi has $N$ teeth arranged in a single row from left to right. The current condition of his teeth is represented by a string $S$.

If the $i$-th character of $S$ is `O`, it means that the $i$-th tooth from the left is healthy. If it is `X`, it means that the $i$-th tooth has a cavity. Healthy teeth do not have cavities.

When he has $K$ consecutive healthy teeth, he can eat one strawberry using those $K$ teeth. After eating a strawberry, those $K$ teeth develop cavities and become unhealthy.

Find the maximum number of strawberries he can eat.

## Constraints

- $1 \leq K \leq N \leq 100$
- $N$ and $K$ are integers.
- $S$ is a string of length $N$ consisting of `O` and `X`.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the answer.

```input1
7 3
OOXOOOO
```

```output1
1
```

He can eat one strawberry by using the three consecutive healthy teeth from the 4th to 6th tooth from the left. After this, he cannot eat any more strawberries. Besides, there is no way for him to eat more than one strawberry. Therefore, print $1$.

```input2
12 2
OXXOOOXOOOOX
```

```output2
3
```

```input3
22 5
XXOOOOOOOOXXOOOOOXXXXX
```

```output3
2
```