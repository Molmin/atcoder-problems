Score : $300$ points

## Problem Statement

Takahashi has forgotten his PIN. The PIN is a four-digit string consisting of `0`, `1`, $\ldots$, `9`, and may begin with a `0`.

For each digit `0` through `9`, Takahashi remembers the following fact, represented by a $10$-character string $S_0S_1 \ldots S_9$:

- if $S_i$ is `o`: he is certain that the PIN contained the digit $i$;
- if $S_i$ is `x`: he is certain that the PIN did not contain the digit $i$;
- if $S_i$ is `?`: he is not sure whether the PIN contained the digit $i$.

How many strings are there that could be Takahashi's PIN?

## Constraints

- $S$ is a $10$-character string consisting of `o`, `x`, and `?`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
ooo???xxxx
```

```output1
108
```

Some of the possible PINs are `0123` and `0021`.

```input2
o?oo?oxoxo
```

```output2
0
```

There may be no possible PINs, in which case the answer is $0$.

```input3
xxxxx?xxxo
```

```output3
15
```