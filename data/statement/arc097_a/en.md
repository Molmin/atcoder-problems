Score : $300$ points

## Problem Statement

You are given a string $s$.
Among the **different** substrings of $s$, print the $K$-th lexicographically smallest one.

A substring of $s$ is a string obtained by taking out a non-empty contiguous part in $s$.
For example, if $s$ $=$ `ababc`, `a`, `bab` and `ababc` are substrings of $s$, while `ac`, `z` and an empty string are not.
Also, we say that substrings are different when they are different as strings.

Let $X = x_{1}x_{2}...x_{n}$ and $Y = y_{1}y_{2}...y_{m}$ be two distinct strings. $X$ is lexicographically larger than $Y$ if and only if $Y$ is a prefix of $X$ or $x_{j} &gt; y_{j}$ where $j$ is the smallest integer such that $x_{j} \neq y_{j}$.

## Constraints

- $1$ $\leq$ $|s|$ $\leq$ $5000$
- $s$ consists of lowercase English letters.
- $1$ $\leq$ $K$ $\leq$ $5$
- $s$ has at least $K$ different substrings.

## Partial Score

- $200$ points will be awarded as a partial score for passing the test set satisfying $|s|$ $\leq$ $50$.

## Input

Input is given from Standard Input in the following format:

> $s$
> 
> $K$

## Output

Print the $K$-th lexicographically smallest substring of $K$.

```input1
aba
4
```

```output1
b
```

$s$ has five substrings: `a`, `b`, `ab`, `ba` and `aba`.
Among them, we should print the fourth smallest one, `b`.
Note that we do not count `a` twice.

```input2
atcoderandatcodeer
5
```

```output2
andat
```

```input3
z
1
```

```output3
z
```