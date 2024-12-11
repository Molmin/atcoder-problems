Score : $300$ points

## Problem Statement

Takahashi is on a two-dimensional plane.  Starting from the origin, he made $N$ moves.

The $N$ moves are represented by a string of length $N$ as described below:

- <p>Takahashi's coordinates after the $i$-th move are:</p>
-   - $(x+1,y)$ if the $i$-th character of $S$ is `R`;
-   - $(x-1,y)$ if the $i$-th character of $S$ is `L`;
-   - $(x,y+1)$ if the $i$-th character of $S$ is `U`; and
-   - $(x,y-1)$ if the $i$-th character of $S$ is `D`,

<p>where $(x,y)$ is his coordinates before the move.</p>

Determine if Takahashi visited the same coordinates multiple times in the course of the $N$ moves (including the starting and ending points).

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $N$ is an integer.
- $S$ is a string of length $N$ consisting of `R`, `L`, `U`, and `D`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print `Yes` if Takahashi visited the same coordinates multiple times in the course of the $N$ moves; print `No` otherwise.

```input1
5
RLURU
```

```output1
Yes
```

Takahashi's coordinates change as follows: $(0,0)\to (1,0)\to (0,0)\to (0,1)\to (1,1)\to (1,2)$.

```input2
20
URDDLLUUURRRDDDDLLLL
```

```output2
No
```