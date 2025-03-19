Score : $200$ points

## Problem Statement

You are given $N$ strings $S_1, S_2, \ldots, S_N$, each consisting of lowercase English letters. The lengths of these strings are all distinct.

Sort these strings in ascending order of length, and then concatenate them in that order to form a single string.

## Constraints

- $2 \leq N \leq 50$
- $N$ is an integer.
- Each $S_i$ is a string consisting of lowercase English letters with length between $1$ and $50$, inclusive.
- If $i \neq j$, the length of $S_i$ is different from the length of $S_j$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer.

```input1
3
tc
oder
a
```

```output1
atcoder
```

When we sort (`tc`, `oder`, `a`) in ascending order of length, we get (`a`, `tc`, `oder`). Concatenating them in this order yields the string `atcoder`.

```input2
4
cat
enate
on
c
```

```output2
concatenate
```