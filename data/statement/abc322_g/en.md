Score : $600$ points

## Problem Statement

For a non-negative integer sequence $S=(S_1,S_2,\dots,S_k)$ and an integer $a$, we define the function $f(S,a)$ as follows:

- $f(S,a) = \sum_{i=1}^{k} S_i \times a^{k - i}$.

For example, $f((1,2,3),4) = 1 \times 4^2 + 2 \times 4^1 + 3 \times 4^0 = 27$, and $f((1,1,1,1),10) = 1 \times 10^3 + 1 \times 10^2 + 1 \times 10^1 + 1 \times 10^0 = 1111$.

You are given positive integers $N$ and $X$. Find the number, modulo $998244353$, of triples $(S,a,b)$ of a sequence of non-negative integers $S=(S_1,S_2,\dots,S_k)$ and positive integers $a$ and $b$ that satisfy all of the following conditions.

- $k \ge 1$
- $a,b \le N$
- $S_1 \neq 0$
- $S_i &lt; \min(10,a,b)(1 \le i \le k)$
- $f(S,a) - f(S,b) = X$

## Constraints

- $1 \le N \le 10^9$
- $1 \le X \le 2 \times 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$

## Output

Print the number, modulo $998244353$, of triples $(S,a,b)$ of a sequence of non-negative integers $S=(S_1,S_2,\dots,S_k)$ and positive integers $a$ and $b$ that satisfy the conditions.

```input1
4 2
```

```output1
5
```

The five triples $(S,a,b)=((1,0),4,2),((1,1),4,2),((2,0),4,3),((2,1),4,3),((2,2),4,3)$ satisfy the conditions.

```input2
9 30
```

```output2
31
```

```input3
322322322 200000
```

```output3
140058961
```