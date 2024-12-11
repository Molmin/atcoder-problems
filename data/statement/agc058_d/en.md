Score : $1000$ points

## Problem Statement

You are given integers $A$, $B$, and $C$.
How many strings $S$ consisting of `A`, `B`, and `C` satisfy all of the following conditions? Find the count modulo $998244353$.

- The number of occurrences of `A`, `B`, and `C` in $S$ are $A$, $B$, and $C$, respectively.
- $S$ contains none of `ABC`, `BCA`, and `CAB` as a (contiguous) substring.

## Constraints

- $1 \leq A,B,C \leq 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print the answer.

```input1
1 1 1
```

```output1
3
```

The three strings that satisfy the conditions are `ACB`, `CBA`, and `BAC`.

```input2
2 2 2
```

```output2
42
```

```input3
96 11 46
```

```output3
818015722
```

```input4
125132 102271 152064
```

```output4
128086069
```