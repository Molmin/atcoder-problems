Score : $300$ points

## Problem Statement

Given are $N$ strings $S_1, S_2, \dots, S_N$.
Each of these is a non-empty string consisting of lowercase English letters, with zero or one `!` added at the beginning.<br>
We say a string $T$ to be unsatisfied when it matches one of $S_1, S_2, \dots, S_N$ regardless of whether we add an `!` at the beginning of $T$.<br>
Determine whether there exists an unsatisfied string. If so, present one such string.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $1 \le |S_i| \le 10$
- $S_i$ is a non-empty string consisting of lowercase English letters, with zero or one `!` added at the beginning.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $\vdots$
> 
> $S_N$

## Output

If there exists an unsatisfied string, print one such string.<br>
If there is no unsatisfied string, print `satisfiable`.  

```input1
6
a
!a
b
!c
d
!d
```

```output1
a
```

`a` matches $S_1$ as is, and it matches $S_2$ when we add an `!`, so it is unsatisfied.
Besides that, `d` will also be accepted.

```input2
10
red
red
red
!orange
yellow
!blue
cyan
!green
brown
!gray
```

```output2
satisfiable
```