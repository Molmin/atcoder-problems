Score : $400$ points

## Problem Statement

A positive integer $X$ is said to be a lunlun number if and only if the following condition is satisfied:

- In the base ten representation of $X$ (without leading zeros), for every pair of two adjacent digits, the absolute difference of those digits is at most $1$.

For example, $1234$, $1$, and $334$ are lunlun numbers, while none of $31415$, $119$, or $13579$ is.

You are given a positive integer $K$. Find the $K$-th smallest lunlun number.

## Constraints

- $1 \leq K \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $K$

## Output

Print the answer.

```input1
15
```

```output1
23
```

We will list the $15$ smallest lunlun numbers in ascending order:<br>
$1$,
$2$,
$3$,
$4$,
$5$,
$6$,
$7$,
$8$,
$9$,
$10$,
$11$,
$12$,
$21$,
$22$,
$23$.<br>
Thus, the answer is $23$.

```input2
1
```

```output2
1
```

```input3
13
```

```output3
21
```

```input4
100000
```

```output4
3234566667
```

Note that the answer may not fit into the $32$-bit signed integer type.