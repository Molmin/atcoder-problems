Score : $900$ points

## Problem Statement

You are given strings $S$ and $T$ of length $N$ consisting of `X` and `Y`.
For each $i = 1, 2, \dots, N$, you can swap the $i$-th character of $S$ and the $i$-th character of $T$ or choose not to do it.
There are $2^N$ pairs of strings that can result from this process, including duplicates. Find the longest string that is a common subsequence (not necessarily contiguous) of one of such pairs.
If there are multiple such strings, find the lexicographically smallest of them.

What is a common subsequence?
A **subsequence** of string $S$ is a string obtained by deleting zero or more characters from $S$ and concatenating the remaining characters without changing the order.
A **common subsequence** of strings $S$ and $T$ is a string that is a subsequence of both $S$ and $T$.
(See also Sample Output 1.)

## Constraints

- $1 \leq N \leq 50$
- Each of $S$ and $T$ is a string of length $N$ consisting of `X` and `Y`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

Print the lexicographically smallest of the longest strings that can be a common subsequence of the resulting pair of strings.

```input1
3
XXX
YYY
```

```output1
XY
```

- If you swap nothing, the only common subsequence of `XXX` and `YYY` is the empty string.
- If you swap the $1$-st characters, the common subsequences of `YXX` and `XYY` are the empty string, `X`, and `Y`.
- If you swap the $2$-nd characters, the common subsequences of `XYX` and `YXY` are the empty string, `X`, `Y`, `XY`, and `YX`.
- If you swap the $3$-rd characters, the common subsequences of `XXY` and `YYX` are the empty string, `X` and `Y`.

Doing two or more swaps is equivalent to one of the above after swapping $S$ and $T$ themselves.
Thus, the longest strings that can be a common subsequence are `XY` and `YX`. The lexicographically smaller of them, `XY`, is the answer.

```input2
1
X
Y
```

```output2

```

The answer may be the empty string.

```input3
4
XXYX
YYYY
```

```output3
XYY
```

`XYY` will be a common subsequence after, for instance, swapping just the $2$-nd characters.
Any string that is longer or has the same length and is lexicographically smaller will not be a common subsequence after any combination of swaps, so this is the answer.