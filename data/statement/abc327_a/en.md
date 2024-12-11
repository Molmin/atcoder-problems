Score : $100$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters.<br>
If there are any adjacent occurrences of `a` and `b` in $S$, print `Yes`; otherwise, print `No`. (The order of `a` and `b` does not matter.)

## Constraints

- $2 \leq N \leq 100$
- $S$ is a string of length $N$ consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

If there are any adjacent occurrences of `a` and `b` in $S$, print `Yes`; otherwise, print `No`.

```input1
3
abc
```

```output1
Yes
```

The string `abc` has `a` as the first character and `b` as the second character, which are adjacent. Thus, print `Yes`.

```input2
2
ba
```

```output2
Yes
```

The string `ba` has `a` as the second character and `b` as the first character, which are adjacent. (Note that the order of `a` and `b` does not matter.)

```input3
7
atcoder
```

```output3
No
```