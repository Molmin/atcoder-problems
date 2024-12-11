Score : $900$ points

## Problem Statement

For a positive integer $n$, let us define $f(n)$ as the number of digits in base $10$.

You are given an integer $S$.
Count the number of the pairs of positive integers $(l, r)$ ($l \leq r$) such that $f(l) + f(l + 1) + ... + f(r) = S$, and find the count modulo $10^9 + 7$.

## Constraints

- $1 \leq S \leq 10^8$

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
1
```

```output1
9
```

There are nine pairs $(l, r)$ that satisfies the condition: $(1, 1)$, $(2, 2)$, $...$, $(9, 9)$.

```input2
2
```

```output2
98
```

There are $98$ pairs $(l, r)$ that satisfies the condition, such as $(1, 2)$ and $(33, 33)$.

```input3
123
```

```output3
460191684
```

```input4
36018
```

```output4
966522825
```

```input5
1000
```

```output5
184984484
```