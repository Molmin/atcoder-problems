Score : $300$ points

## Problem Statement

For a positive integer $x$, let $f(x)$ be the answer to the question below.

The following operation on $x$ can be performed zero or more times.

- Let $x'$ be the integer obtained by reversing the decimal notation of $x$. Then, replace $x$ with $x'$. If $x$ now has one or more leading zeros, delete them so that it begins with a non-zero digit.

For example, from $x=1420$, you get $x=241$ after one operation, $x=142$ after two operations, and $x=241$ after three operations.<br>
Find the minimum possible value of $x$ after operations.

Find the number of integers $x$ such that $1 \leq x \leq N$ and $f(x)=K$.

## Constraints

- $1 \leq N,K \leq 10^{12}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the answer.

```input1
1420 142
```

```output1
3
```

Three integers $x=142$, $241$, and $1420$ satisfy $1 \leq x \leq 1420$ and $f(x)=142$.

```input2
1419 142
```

```output2
2
```

```input3
6 19
```

```output3
0
```