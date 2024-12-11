Score : $675$ points

## Problem Statement

You are given positive integers $N$, $M$, $K$, and a sequence of non-negative integers: $A=(A_1,A_2,\ldots,A_N)$.

For a non-empty non-negative integer sequence $B=(B_1,B_2,\ldots,B_{|B|})$, we define its **score** as follows.

- If the length of $B$ is a multiple of $M$: $(B_1 \oplus B_2 \oplus \dots \oplus B_{|B|})^K$
- Otherwise: $0$

Here, $\oplus$ represents the bitwise XOR.

Find the sum, modulo $998244353$, of the scores of the $2^N-1$ non-empty subsequences of $A$.

What is bitwise XOR? The bitwise XOR of non-negative integers $A$ and $B$, denoted as $A \oplus B$, is defined as follows: 

- In the binary representation of $A \oplus B$, the digit at position $2^k$ ($k \geq 0$) is $1$ if exactly one of $A$ and $B$ has a $1$ in that position in their binary representations, and $0$ otherwise.

 For example, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$). In general, the XOR of $k$ integers $p_1, \dots, p_k$ is defined as $(\cdots ((p_1 \oplus p_2) \oplus p_3) \oplus \cdots \oplus p_k)$, and it can be proved that this is independent of the order of $p_1, \dots, p_k$. 

## Constraints

- $1 \leq N,K \leq 2 \times 10^5$
- $1 \leq M \leq 100$
- $0 \leq A_i &lt; 2^{20}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3 2 2
1 2 3
```

```output1
14
```

Here are the scores of the $2^3-1=7$ non-empty subsequences of $A$.

- $(1)$: $0$
- $(2)$: $0$
- $(3)$: $0$
- $(1,2)$: $(1\oplus2)^2=9$
- $(1,3)$: $(1\oplus3)^2=4$
- $(2,3)$: $(2\oplus3)^2=1$
- $(1,2,3)$: $0$

Therefore, the sought sum is $0+0+0+9+4+1+0=14$.

```input2
10 5 3
100 100 100 100 100 100 100 100 100 100
```

```output2
252000000
```

```input3
16 4 100
7053 3876 3178 8422 7802 5998 2334 6757 6889 6637 7365 9495 7848 9026 7312 6558
```

```output3
432440016
```