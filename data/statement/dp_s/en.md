Score : $100$ points

## Problem Statement

Find the number of integers between $1$ and $K$ (inclusive) satisfying the following condition, modulo $10^9 + 7$:

- The sum of the digits in base ten is a multiple of $D$.

## Constraints

- All values in input are integers.
- $1 \leq K &lt; 10^{10000}$
- $1 \leq D \leq 100$

## Input

Input is given from Standard Input in the following format:

> $K$
> 
> $D$

## Output

Print the number of integers satisfying the condition, modulo $10^9 + 7$.

```input1
30
4
```

```output1
6
```

Those six integers are: $4, 8, 13, 17, 22$ and $26$.

```input2
1000000009
1
```

```output2
2
```

Be sure to print the number modulo $10^9 + 7$.

```input3
98765432109876543210
58
```

```output3
635270834
```