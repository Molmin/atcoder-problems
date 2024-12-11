Score : $300$ points

## Problem Statement

Given is a string $S$ of length $N$ consisting of lowercase English letters.

You can do the following operation on $S$ any number of times.

- Choose its (non-empty) contiguous substring such that the first character and the last character are different, and delete this substring.

Determine whether it is possible to make $S$ empty. If it is possible, find the minimum number of operations needed to do so.

## Constraints

- $2 \leq N \leq 10^5$
- $S$ is a string of length $N$ consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

If it is possible to make $S$ empty, print the minimum number of operations needed to do so.
Otherwise, print $-1$.

```input1
4
abba
```

```output1
2
```

We should do as follows: `abba` → (delete `ab`) → `ba` → (delete `ba`) → an empty string.

```input2
3
aba
```

```output2
-1
```