Score : $100$ points

## Problem Statement

Snuke prepared $6$ problems for a upcoming programming contest.
For each of those problems, Rng judged whether it can be used in the contest or not.

You are given a string $S$ of length $6$.
If the $i$-th character of $s$ is `1`, it means that the $i$-th problem prepared by Snuke is accepted to be used; `0` means that the problem is not accepted.

How many problems prepared by Snuke are accepted to be used in the contest?

## Constraints

- The length of $S$ is $6$.
- $S$ consists of `0` and `1`.

## Inputs

Input is given from Standard Input in the following format:

> $S$

## Outputs

Print the number of problems prepared by Snuke that are accepted to be used in the contest.

```input1
111100
```

```output1
4
```

The first, second, third and fourth problems are accepted, for a total of four.

```input2
001001
```

```output2
2
```

```input3
000000
```

```output3
0
```