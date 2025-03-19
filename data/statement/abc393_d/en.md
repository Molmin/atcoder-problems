Score : $425$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `0` and `1`. It is guaranteed that $S$ contains at least one `1`.

You may perform the following operation any number of times (possibly zero):

- Choose an integer $i$ ($1 \leq i \leq N-1$) and swap the $i$-th and $(i+1)$-th characters of $S$.

Find the minimum number of operations needed so that all `1`s are contiguous.

Here, all `1`s are said to be contiguous if and only if there exist integers $l$ and $r$ ($1 \leq l \leq r \leq N$) such that the $i$-th character of $S$ is `1` if and only if $l \leq i \leq r$, and `0` otherwise.

## Constraints

- $2 \leq N \leq 5 \times 10^5$
- $N$ is an integer.
- $S$ is a length $N$ string of `0` and `1`.
- $S$ contains at least one `1`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
7
0101001
```

```output1
3
```

For example, the following three operations make all `1`s contiguous:

- Choose $i=2$ and swap the 2nd and 3rd characters. Then, $S=$ `0011001`.
- Choose $i=6$ and swap the 6th and 7th characters. Then, $S=$ `0011010`.
- Choose $i=5$ and swap the 5th and 6th characters. Then, $S=$ `0011100`.

It is impossible to do this in two or fewer swaps, so the answer is $3$.

```input2
3
100
```

```output2
0
```

All `1`s are already contiguous, so no swaps are needed.

```input3
10
0101001001
```

```output3
7
```