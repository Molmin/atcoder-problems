Score : $600$ points

## Problem Statement

We define the general term $a_n$ of a sequence $a_0, a_1, a_2, \dots$ by:

$a_n = \begin{cases} 1 & (0 \leq n \lt K) \\ \displaystyle{\sum_{i=1}^K} a_{n-i} & (K \leq n). \\ \end{cases}$

<br>

Given an integer $N$, find the sum, modulo $998244353$, of $a_m$ over all non-negative integers $m$ such that $m\text{ AND }N = m$.  ($\text{AND}$ denotes the bitwise AND.)

What is bitwise AND?

The bitwise AND of non-negative integers $A$ and $B$, $A\text{ AND }B$, is defined as follows.

・When $A\text{ AND }B$ is written in binary, its $2^k$s place ($k \geq 0$) is $1$ if $2^k$s places of $A$ and $B$ are both $1$, and $0$ otherwise.

## Constraints

- $1 \leq K \leq 5 \times 10^4$
- $0 \leq N \leq 10^{18}$
- $N$ and $K$ are integers.

## Input

The input is given from Standard Input in the following format:

> $K$ $N$

## Output

Print the answer.

```input1
2 6
```

```output1
21
```

$a_0$ and succeeding terms are $1, 1, 2, 3, 5, 8, 13, 21, \dots$.
Four non-negative integers, $0, 2, 4$, and $6$, satisfy $6 \text{ AND } m = m$, so the answer is $1 + 2 + 5 + 13 = 21$.

```input2
2 8
```

```output2
35
```

```input3
1 123456789
```

```output3
65536
```

```input4
300 20230429
```

```output4
125461938
```

```input5
42923 999999999558876113
```

```output5
300300300
```