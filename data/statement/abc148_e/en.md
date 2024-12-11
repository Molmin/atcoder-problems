Score : $500$ points

## Problem Statement

For an integer $n$ not less than $0$, let us define $f(n)$ as follows:

- $f(n) = 1$ (if $n &lt; 2$)
- $f(n) = n f(n-2)$ (if $n \geq 2$)

Given is an integer $N$. Find the number of trailing zeros in the decimal notation of $f(N)$.

## Constraints

- $0 \leq N \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the number of trailing zeros in the decimal notation of $f(N)$.

```input1
12
```

```output1
1
```

$f(12) = 12 \times 10 \times 8 \times 6 \times 4 \times 2 = 46080$, which has one trailing zero.

```input2
5
```

```output2
0
```

$f(5) = 5 \times 3 \times 1 = 15$, which has no trailing zeros.

```input3
1000000000000000000
```

```output3
124999999999999995
```