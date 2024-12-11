Score : $200$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters, and an integer $K$.
Print the string obtained by replacing every character in $S$ that differs from the $K$-th character of $S$, with `*`.

## Constraints

- $1 \leq K \leq N\leq 10$
- $S$ is a string of length $N$ consisting of lowercase English letters.
- $N$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $K$

## Output

Print the string obtained by replacing every character in $S$ that differs from the $K$-th character of $S$, with `*`.

```input1
5
error
2
```

```output1
*rr*r
```

The second character of $S$ is `r`. When we replace every character in `error` that differs from `r` with `*`, we get the string `*rr*r`.

```input2
6
eleven
5
```

```output2
e*e*e*
```

```input3
9
education
7
```

```output3
******i**
```