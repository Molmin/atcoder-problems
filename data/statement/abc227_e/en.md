Score : $500$ points

## Problem Statement

Given is a string $S$ consisting of `K`, `E`, `Y`.

How many strings are there that can be obtained with at most $K$ swaps of two adjacent characters in $S$?

## Constraints

- $2 \leq |S| \leq 30$
- $0 \leq K \leq 10^9$
- $S$ consists of `K`, `E`, `Y`.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $K$

## Output

Print the answer.

```input1
KEY
1
```

```output1
3
```

With at most one swap, there are three strings that can be obtained: `KEY`, `EKY`, `KYE`.

```input2
KKEE
2
```

```output2
4
```

With at most two swaps, there are four strings that can be obtained: `KKEE`, `KEKE`, `EKKE`, `KEEK`.

```input3
KKEEYY
1000000000
```

```output3
90
```