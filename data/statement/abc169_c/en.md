Score : $300$ points

## Problem Statement

Compute $A \times B$, truncate its fractional part, and print the result as an integer.

## Constraints

- $0 \leq A \leq 10^{15}$
- $0 \leq B &lt; 10$
- $A$ is an integer.
- $B$ is a number with two digits after the decimal point.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the answer as an integer.

```input1
198 1.10
```

```output1
217
```

We have $198 \times 1.10 = 217.8$. After truncating the fractional part, we have the answer: $217$.

```input2
1 0.01
```

```output2
0
```

```input3
1000000000000000 9.99
```

```output3
9990000000000000
```