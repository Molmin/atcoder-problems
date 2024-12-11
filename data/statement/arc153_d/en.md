Score : $800$ points

## Problem Statement

For a positive integer $x$, let $f(x)$ denote the sum of its digits. For instance, we have $f(153) = 1 + 5 + 3 = 9$, $f(2023) = 2 + 0 + 2 + 3 = 7$, and $f(1) = 1$.

You are given a sequence of positive integers $A = (A_1, \ldots, A_N)$. Find the minimum possible value of $\sum_{i=1}^N f(A_i + x)$ where $x$ is a non-negative integer.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq A_i &lt; 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the minimum possible value of $\sum_{i=1}^N f(A_i + x)$ where $x$ is a non-negative integer.

```input1
4
4 13 8 6
```

```output1
14
```

For instance, $x = 7$ makes $\sum_{i=1}^N f(A_i+x) = f(11) + f(20) + f(15) + f(13) = 14$.

```input2
4
123 45 678 90
```

```output2
34
```

For instance, $x = 22$ makes $\sum_{i=1}^N f(A_i+x) = f(145) + f(67) + f(700) + f(112) = 34$.

```input3
3
1 10 100
```

```output3
3
```

For instance, $x = 0$ makes $\sum_{i=1}^N f(A_i+x) = f(1) + f(10) + f(100) = 3$.

```input4
1
153153153
```

```output4
1
```

For instance,  $x = 9999846846847$ makes $\sum_{i=1}^N f(A_i+x) = f(10000000000000) = 1$.