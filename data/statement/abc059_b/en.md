Score : $200$ points

## Problem Statement

You are given two positive integers $A$ and $B$. Compare the magnitudes of these numbers.

## Constraints

- $1 \leq A, B \leq 10^{100}$
- Neither $A$ nor $B$ begins with a `0`.

## Input

Input is given from Standard Input in the following format:

> $A$
> 
> $B$

## Output

Print `GREATER` if $A &gt; B$, `LESS` if $A&lt;B$ and `EQUAL` if $A=B$.

```input1
36
24
```

```output1
GREATER
```

Since $36 &gt; 24$, print `GREATER`.

```input2
850
3777
```

```output2
LESS
```

```input3
9720246
22516266
```

```output3
LESS
```

```input4
123456789012345678901234567890
234567890123456789012345678901
```

```output4
LESS
```