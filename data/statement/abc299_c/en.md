Score : $300$ points

## Problem Statement

For a positive integer $L$, a level-$L$ dango string is a string that satisfies the following conditions.

- It is a string of length $L+1$ consisting of `o` and `-`.
- Exactly one of the first character and the last character is `-`, and the other $L$ characters are `o`.

For instance, `ooo-` is a level-$3$ dango string, but none of `-ooo-`, `oo`, and `o-oo-` is a dango string (more precisely, none of them is a level-$L$ dango string for any positive integer $L$).

You are given a string $S$ of length $N$ consisting of the two characters `o` and `-`.
Find the greatest positive integer $X$ that satisfies the following condition.

- There is a contiguous substring of $S$ that is a level-$X$ dango string.

If there is no such integer, print `-1`.

## Constraints

- $1\leq N\leq 2\times10^5$
- $S$ is a string of length $N$ consisting of `o` and `-`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the greatest positive integer $X$ such that $S$ contains a level-$X$ dango string, or `-1` if there is no such integer.

```input1
10
o-oooo---o
```

```output1
4
```

For instance, the substring `oooo-` corresponding to the $3$-rd through $7$-th characters of $S$ is a level-$4$ dango string.
No substring of $S$ is a level-$5$ dango string or above, so you should print $4$.

```input2
1
-
```

```output2
-1
```

Only the empty string and `-` are the substrings of $S$.
They are not dango strings, so you should print `-1`.

```input3
30
-o-o-oooo-oo-o-ooooooo--oooo-o
```

```output3
7
```