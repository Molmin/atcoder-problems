Score : $300$ points

## Problem Statement

You are given a string $S$.

Takahashi can insert the character `A` at any position in this string any number of times.

Can he change $S$ into `AKIHABARA`?

## Constraints

- $1 \leq |S| \leq 50$
- $S$ consists of uppercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If it is possible to change $S$ into `AKIHABARA`, print `YES`; otherwise, print `NO`.

```input1
KIHBR
```

```output1
YES
```

Insert one `A` at each of the four positions: the beginning, immediately after `H`, immediately after `B` and the end.

```input2
AKIBAHARA
```

```output2
NO
```

The correct spell is `AKIHABARA`.

```input3
AAKIAHBAARA
```

```output3
NO
```