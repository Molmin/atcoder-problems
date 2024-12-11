Score : $400$ points

## Problem Statement

A function $f(x)$ defined for non-negative integers $x$ satisfies the following conditions.

- $f(0) = 1$.
- $f(k) = f(\lfloor \frac{k}{2}\rfloor) + f(\lfloor \frac{k}{3}\rfloor)$ for any positive integer $k$.

Here, $\lfloor A \rfloor$ denotes the value of $A$ rounded down to an integer.

Find $f(N)$.

## Constraints

- $N$ is an integer satisfying $0 \le N \le 10^{18}$.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
2
```

```output1
3
```

We have $f(2) = f(\lfloor \frac{2}{2}\rfloor) + f(\lfloor \frac{2}{3}\rfloor) = f(1) + f(0) =(f(\lfloor \frac{1}{2}\rfloor) + f(\lfloor \frac{1}{3}\rfloor)) + f(0) =(f(0)+f(0)) + f(0)= 3$.

```input2
0
```

```output2
1
```

```input3
100
```

```output3
55
```