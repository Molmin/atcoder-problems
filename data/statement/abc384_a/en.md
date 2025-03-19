Score : $100$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters, along with lowercase English letters $c_1$ and $c_2$.

Find the string obtained by replacing every character of $S$ that is **not** $c_1$ with $c_2$.

## Constraints

- $1\le N\le 100$
- $N$ is an integer.
- $c_1$ and $c_2$ are lowercase English letters.
- $S$ is a string of length $N$ consisting of lowercase English letters.

## Input

The input is given in the following format from Standard Input:

> $N$ $c_1$ $c_2$
> 
> $S$

## Output

Print the answer.

```input1
3 b g
abc
```

```output1
gbg
```

Replacing `a` and `c` (which are not `b`) with `g` in $S=$ `abc` results in `gbg`, so print `gbg`.

```input2
1 s h
s
```

```output2
s
```

It is possible that the resulting string after replacement is the same as the original string.

```input3
7 d a
atcoder
```

```output3
aaaadaa
```

```input4
10 b a
acaabcabba
```

```output4
aaaabaabba
```