Score : $300$ points

## Problem Statement

There are $N$ stones arranged in a row. Every stone is painted white or black.
A string $S$ represents the color of the stones. The $i$-th stone from the left is white if the $i$-th character of $S$ is `.`, and the stone is black if the character is `#`.

Takahashi wants to change the colors of some stones to black or white so that there will be no white stone immediately to the right of a black stone.
Find the minimum number of stones that needs to be recolored.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $S$ is a string of length $N$ consisting of `.` and `#`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the minimum number of stones that needs to be recolored.

```input1
3
#.#
```

```output1
1
```

It is enough to change the color of the first stone to white.

```input2
5
#.##.
```

```output2
2
```

```input3
9
.........
```

```output3
0
```