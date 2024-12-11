Score : $300$ points

## Problem Statement

There are $N$ integers $a_1, a_2, ..., a_N$ not less than $1$.
The values of $a_1, a_2, ..., a_N$ are not known, but it is known that $a_1 \times a_2 \times ... \times a_N = P$.

Find the maximum possible greatest common divisor of $a_1, a_2, ..., a_N$.

## Constraints

- $1 \leq N \leq 10^{12}$
- $1 \leq P \leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $N$ $P$

## Output

Print the answer.

```input1
3 24
```

```output1
2
```

The greatest common divisor would be $2$ when, for example, $a_1=2, a_2=6$ and $a_3=2$.

```input2
5 1
```

```output2
1
```

As $a_i$ are positive integers, the only possible case is $a_1 = a_2 = a_3 = a_4 = a_5 = 1$.

```input3
1 111
```

```output3
111
```

```input4
4 972439611840
```

```output4
206
```