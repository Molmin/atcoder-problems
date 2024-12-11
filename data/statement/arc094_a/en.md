Score : $300$ points

## Problem Statement

You are given three integers $A$, $B$ and $C$. Find the minimum number of operations required to make $A$, $B$ and $C$ all equal by repeatedly performing the following two kinds of operations in any order:

- Choose two among $A$, $B$ and $C$, then increase both by $1$.
- Choose one among $A$, $B$ and $C$, then increase it by $2$.

It can be proved that we can always make $A$, $B$ and $C$ all equal by repeatedly performing these operations.

## Constraints

- $0 \leq A,B,C \leq 50$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print the minimum number of operations required to make $A$, $B$ and $C$ all equal.

```input1
2 5 4
```

```output1
2
```

We can make $A$, $B$ and $C$ all equal by the following operations:

- Increase $A$ and $C$ by $1$. Now, $A$, $B$, $C$ are $3$, $5$, $5$, respectively.
- Increase $A$ by $2$. Now, $A$, $B$, $C$ are $5$, $5$, $5$, respectively.

```input2
2 6 3
```

```output2
5
```

```input3
31 41 5
```

```output3
23
```