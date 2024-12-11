Score : $300$ points

## Problem Statement

For a positive integer $x$, let $f(x)$ be the sum of its digit. For example, $f(144) = 1+4+4 = 9$ and $f(1)=1$.

You are given a positive integer $N$. Find the following positive integers $M$ and $x$:

- The maximum positive integer $M$ for which there exists a positive integer $x$ such that $f(x)=N$ and $f(2x)=M$.
- The minimum positive integer $x$ such that $f(x)=N$ and $f(2x)=M$ for the $M$ above.

## Constraints

- $1\leq N\leq 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print $M$ in the first line and $x$ in the second line.

```input1
3
```

```output1
6
3
```

We can prove that whenever $f(x)=3$, $f(2x) = 6$. Thus, $M=6$.
The minimum positive integer $x$ such that $f(x)=3$ and $f(2x)=6$ is $x=3$. These $M$ and $x$ should be printed.

```input2
6
```

```output2
12
24
```

```input3
100
```

```output3
200
4444444444444444444444444
```