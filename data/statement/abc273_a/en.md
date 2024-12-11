Score : $100$ points

## Problem Statement

A function $f(x)$ defined for non-negative integer $x$ satisfies the following conditions:

- $f(0) = 1$;
- $f(k) = k \times f(k-1)$ for all positive integers $k$.

Find $f(N)$.

## Constraints

- $N$ is an integer such that $0 \le N \le 10$.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer as an integer.

```input1
2
```

```output1
2
```

We have $f(2) = 2 \times f(1) = 2 \times 1 \times f(0) = 2 \times 1 \times 1 = 2$.

```input2
3
```

```output2
6
```

We have $f(3) = 3 \times f(2) = 3 \times 2 = 6$.

```input3
0
```

```output3
1
```

```input4
10
```

```output4
3628800
```