Score: $200$ points

## Problem Statement

Given an integer $X$ between $-10^{18}$ and $10^{18}$, inclusive, print $\left\lceil \dfrac{X}{10} \right\rceil$.<br>
Here, $\left\lceil a \right\rceil$ denotes the smallest integer not less than $a$.

## Constraints

- $-10^{18} \leq X \leq 10^{18}$
- $X$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $X$

## Output

Print $\left\lceil \dfrac{X}{10} \right\rceil$ as an integer.

```input1
27
```

```output1
3
```

The integers not less than $\frac{27}{10} = 2.7$ are $3, 4, 5, \dots$. Among these, the smallest is $3$, so $\left \lceil \frac{27}{10} \right \rceil = 3$.

```input2
-13
```

```output2
-1
```

The integers not less than $\frac{-13}{10} = -1.3$ are all positive integers, $0$, and $-1$. Among these, the smallest is $-1$, so $\left \lceil \frac{-13}{10} \right \rceil = -1$.

```input3
40
```

```output3
4
```

The smallest integer not less than $\frac{40}{10} = 4$ is $4$ itself.

```input4
-20
```

```output4
-2
```

```input5
123456789123456789
```

```output5
12345678912345679
```