Score: $400$ points

## Problem Statement

You are given non-negative integers $a$, $b$, and $C$.
Determine if there is a pair of non-negative integers $(X, Y)$ that satisfies all of the following five conditions. If such a pair exists, print one.

- $0 \leq X &lt; 2^{60}$
- $0 \leq Y &lt; 2^{60}$
- $\operatorname{popcount}(X) = a$
- $\operatorname{popcount}(Y) = b$
- $X \oplus Y = C$

Here, $\oplus$ denotes the bitwise XOR.

If multiple pairs $(X, Y)$ satisfy the conditions, you may print any of them.

What is popcount?

For a non-negative integer $x$, the popcount of $x$ is the number of $1$s in the binary representation of $x$.
More precisely, for a non-negative integer $x$ such that $\displaystyle x=\sum _ {i=0} ^ \infty b _ i2 ^ i\ (b _ i\in\lbrace0,1\rbrace)$, we have $\displaystyle\operatorname{popcount}(x)=\sum _ {i=0} ^ \infty b _ i$.

For example, $13$ in binary is `1101`, so $\operatorname{popcount}(13)=3$.

What is bitwise XOR?

For non-negative integers $x, y$, the bitwise exclusive OR $x \oplus y$ is defined as follows.

- The $2^k$'s place $\ (k\geq0)$ in the binary representation of $x \oplus y$ is $1$ if exactly one of the $2^k$'s places $\ (k\geq0)$ in the binary representations of $x$ and $y$ is $1$, and $0$ otherwise.

For example, $9$ and $3$ in binary are `1001` and `0011`, respectively, so $9 \oplus 3 = 10$ (in binary, `1010`).

## Constraints

- $0 \leq a \leq 60$
- $0 \leq b \leq 60$
- $0 \leq C &lt; 2^{60}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $a$ $b$ $C$

## Output

If there is a pair of non-negative integers that satisfies the conditions, choose one such pair $(X, Y)$ and print $X$ and $Y$ in this order, with a space in between.
If no such pair exists, print `-1`.

```input1
3 4 7
```

```output1
28 27
```

The pair $(X, Y) = (28, 27)$ satisfies the conditions.
Here, $X$ and $Y$ in binary are `11100` and `11011`, respectively.

- $X$ in binary is `11100`, so $\operatorname{popcount}(X) = 3$.
- $Y$ in binary is `11011`, so $\operatorname{popcount}(Y) = 4$.
- $X \oplus Y$ in binary is `00111`, so $X \oplus Y = 7$.

If multiple pairs of non-negative integers satisfy the conditions, you may print any of them, so printing `42 45`, for example, would also be accepted.

```input2
34 56 998244353
```

```output2
-1
```

No pair of non-negative integers satisfies the conditions.

```input3
39 47 530423800524412070
```

```output3
540431255696862041 10008854347644927
```

Note that the values to be printed may not fit in $32$-bit integers.