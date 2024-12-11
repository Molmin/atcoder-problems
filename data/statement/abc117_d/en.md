Score : $400$ points

## Problem Statement

You are given $N$ non-negative integers $A_1, A_2, ..., A_N$ and another non-negative integer $K$.

For a integer $X$ between $0$ and $K$ (inclusive), let $f(X) = (X$ XOR $A_1)$ $+$ $(X$ XOR $A_2)$ $+$ $...$ $+$ $(X$ XOR $A_N)$.

Here, for non-negative integers $a$ and $b$, $a$ XOR $b$ denotes the bitwise exclusive OR of $a$ and $b$.

Find the maximum value of $f$.

What is XOR?

The bitwise exclusive OR of $a$ and $b$, $X$, is defined as follows:

- When $X$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if, when written in base two, exactly one of $A$ and $B$ has $1$ in the $2^k$'s place, and $0$ otherwise.

For example, $3$ XOR $5 = 6$. (When written in base two: $011$ XOR $101 = 110$.)

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $0 \leq K \leq 10^{12}$
- $0 \leq A_i \leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the maximum value of $f$.

```input1
3 7
1 6 3
```

```output1
14
```

The maximum value is: $f(4) = (4$ XOR $1) + (4$ XOR $6) + (4$ XOR $3) = 5 + 2 + 7 = 14$.

```input2
4 9
7 4 0 3
```

```output2
46
```

```input3
1 0
1000000000000
```

```output3
1000000000000
```