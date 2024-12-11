Score : $500$ points

## Problem Statement

At most how many times can the product of all positive divisors of $A^{B}$ be divided by $A$?

It can be shown from the constraints that this count is finite, so find it modulo $998244353$.

## Constraints

- $2\leq A\leq 10^{12}$
- $0\leq B\leq 10^{18}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the answer.

```input1
2 3
```

```output1
6
```

The positive divisors of $A^{B}=8$ are $1$, $2$, $4$, and $8$, whose product is $64$.
$64$ can be divided by $2$ at most six times, so print $6$.

```input2
924 167
```

```output2
867046524
```

```input3
167167167167 0
```

```output3
0
```