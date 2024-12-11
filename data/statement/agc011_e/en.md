Score : $1300$ points

## Problem Statement

We will call a non-negative integer *increasing* if, for any two adjacent digits in its decimal representation, the digit to the right is greater than or equal to the digit to the left.
For example, $1558$, $11$, $3$ and $0$ are all increasing; $10$ and $20170312$ are not.

Snuke has an integer $N$. Find the minimum number of increasing integers that can represent $N$ as their sum.

## Constraints

- $1 \leq N \leq 10^{500000}$

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the minimum number of increasing integers that can represent $N$ as their sum.

```input1
80
```

```output1
2
```

One possible representation is $80 = 77 + 3$.

```input2
123456789
```

```output2
1
```

$123456789$ in itself is increasing, and thus it can be represented as the sum of one increasing integer.

```input3
20170312
```

```output3
4
```

```input4
7204647845201772120166980358816078279571541735614841625060678056933503
```

```output4
31
```