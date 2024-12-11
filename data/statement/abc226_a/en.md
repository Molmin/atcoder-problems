Score : $100$ points

## Problem Statement

You are given a real number $X$, which is representable using at most three decimal digits, with three decimal digits.<br>
Round $X$ to the nearest integer and print the result.

## Constraints

- $0 \leq X &lt; 100$
- $X$ is representable using at most three decimal digits.
- $X$ has three decimal digits in input.

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

Print the integer resulting from rounding $X$ to the nearest integer.

```input1
3.456
```

```output1
3
```

The digit in the first decimal place of $3.456$ is $4$, so we should round it down to $3$.

```input2
99.500
```

```output2
100
```

```input3
0.000
```

```output3
0
```