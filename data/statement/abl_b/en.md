Score : $200$ points

## Problem Statement

Snuke likes integers that are greater than or equal to $A$, and less than or equal to $B$.
Takahashi likes integers that are greater than or equal to $C$, and less than or equal to $D$.

Does there exist an integer liked by both people?

## Constraints

- $0 \leq A \leq B \leq 10^{18}$
- $0 \leq C \leq D \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

Print `Yes` or `No`.

```input1
10 30 20 40
```

```output1
Yes
```

For example, both like $25$.

```input2
10 20 30 40
```

```output2
No
```