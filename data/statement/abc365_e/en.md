Score : $450$ points

## Problem Statement

You are given an integer sequence $A=(A_1,\ldots,A_N)$ of length $N$. Find the value of the following expression:

$\displaystyle \sum_{i=1}^{N-1}\sum_{j=i+1}^N (A_i \oplus A_{i+1}\oplus \ldots \oplus A_j)$.

<br>

Notes on bitwise XOR
The bitwise XOR of non-negative integers $A$ and $B$, denoted as $A \oplus B$, is defined as follows:

- In the binary representation of $A \oplus B$, the digit at the $2^k$ ($k \geq 0$) position is $1$ if and only if exactly one of the digits at the $2^k$ position in the binary representations of $A$ and $B$ is $1$; otherwise, it is $0$.

For example, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).
In general, the bitwise XOR of $k$ integers $p_1, \dots, p_k$ is defined as $(\cdots ((p_1 \oplus p_2) \oplus p_3) \oplus \cdots \oplus p_k)$.  It can be proved that this is independent of the order of $p_1, \dots, p_k$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^8$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ 
> 
> $A_1$ $A_2$ $\ldots$ $A_{N}$

## Output

Print the answer.

```input1
3
1 3 2
```

```output1
3
```

$A_1 \oplus A_2 = 2$, $A_1 \oplus A_2 \oplus A_3 = 0$, and $A_2 \oplus A_3 = 1$, so the answer is $2 + 0 + 1 = 3$.

```input2
7
2 5 6 5 2 1 7
```

```output2
83
```