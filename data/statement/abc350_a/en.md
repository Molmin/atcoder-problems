Score: $100$ points

## Problem Statement

You are given a string $S$ of length $6$. It is guaranteed that the first three characters of $S$ are `ABC` and the last three characters are digits.

Determine if $S$ is the abbreviation of a contest held and concluded on AtCoder before the start of this contest.

Here, a string $T$ is "the abbreviation of a contest held and concluded on AtCoder before the start of this contest" if and only if it equals one of the following $348$ strings:

`ABC001`, `ABC002`, $\ldots$, `ABC314`, `ABC315`, `ABC317`, `ABC318`, $\ldots$, `ABC348`, `ABC349`.

Note that `ABC316` is not included.

## Constraints

- $S$ is a string of length $6$ where the first three characters are `ABC` and the last three characters are digits.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

If $S$ is the abbreviation of a contest held and concluded on AtCoder before the start of this contest, print `Yes`; otherwise, print `No`.

```input1
ABC349
```

```output1
Yes
```

`ABC349` is the abbreviation of a contest held and concluded on AtCoder last week.

```input2
ABC350
```

```output2
No
```

`ABC350` is this contest, which has not concluded yet.

```input3
ABC316
```

```output3
No
```

`ABC316` was not held on AtCoder.