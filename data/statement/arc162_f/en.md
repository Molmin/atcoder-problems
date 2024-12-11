Score : $900$ points

## Problem Statement

You are given positive integers $N$ and $M$. Among the $2^{NM}$ matrices $A$ with $N$ rows and $M$ columns where each element is $0$ or $1$, find the number, modulo $998244353$, of ones that satisfy the following condition:

- $A_{a, b} \times A_{c, d} \leq A_{a, d} \times A_{c, b}$ for every quadruple of integers $(a, b, c, d)$ such that $1 \leq a &lt; c \leq N$ and $1 \leq b &lt; d \leq M$.

## Constraints

- $1 \leq N, M \leq 400$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer in a single line.

```input1
2 2
```

```output1
13
```

The condition is $A_{1,1} \times A_{2,2} \leq A_{1,2} \times A_{2,1}$. All $13$ matrices other than $\begin{pmatrix} 1 &amp; 0 \\ 0 &amp; 1 \end{pmatrix}, \begin{pmatrix} 1 &amp; 1 \\ 0 &amp; 1 \end{pmatrix}, \begin{pmatrix} 1 &amp; 0 \\ 1 &amp; 1 \end{pmatrix}$ satisfy the condition.

```input2
1 30
```

```output2
75497471
```

All $2^{NM}$ matrices satisfy the condition, so print $2^{30}$ modulo $998244353$, that is, $75497471$.

```input3
400 400
```

```output3
412670892
```