Score : $100$ points

## Problem Statement

There is a row of $N$ people. They are described by a string $S$ of length $N$. The $i$-th person from the front is male if the $i$-th character of $S$ is `M`, and female if it is `F`.

Determine whether the men and women are alternating.

It is said that the men and women are alternating if and only if there is no position where two men or two women are adjacent.

## Constraints

- $1 \leq N \leq 100$
- $N$ is an integer.
- $S$ is a string of length $N$ consisting of `M` and `F`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print `Yes` if the men and women are alternating, and `No` otherwise.

```input1
6
MFMFMF
```

```output1
Yes
```

There is no position where two men or two women are adjacent, so the men and women are alternating.

```input2
9
FMFMMFMFM
```

```output2
No
```

```input3
1
F
```

```output3
Yes
```