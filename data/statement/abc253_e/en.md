Score : $500$ points

## Problem Statement

How many integer sequences $A=(A_1,\ldots,A_N)$ of length $N$ satisfy all the conditions below?

- <p>$1\le A_i \le M$ $(1 \le i \le N)$</p>
- <p>$|A_i - A_{i+1}| \geq K$ $(1 \le i \le N - 1)$  </p>

Since the count can be enormous, find it modulo $998244353$.

## Constraints

- $2 \leq N \leq 1000$
- $1 \leq M \leq 5000$
- $0 \leq K \leq M-1$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

Print the count modulo $998244353$.

```input1
2 3 1
```

```output1
6
```

The following $6$ sequences satisfy the conditions.

- $(1,2)$
- $(1,3)$
- $(2,1)$
- $(2,3)$
- $(3,1)$
- $(3,2)$

```input2
3 3 2
```

```output2
2
```

The following $2$ sequences satisfy the conditions.

- $(1,3,1)$
- $(3,1,3)$

```input3
100 1000 500
```

```output3
657064711
```

Print the count modulo $998244353$.