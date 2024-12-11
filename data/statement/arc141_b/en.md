Score : $500$ points

## Problem Statement

You are given positive integers $N$ and $M$.

Find the number of sequences $A=(A_1,\ A_2,\ \dots,\ A_N)$ of $N$ positive integers that satisfy the following conditions, modulo $998244353$.

- $1 \leq A_1 &lt; A_2 &lt; \dots &lt; A_N \leq M$.
- $B_1 &lt; B_2 &lt; \dots &lt; B_N$, where $B_i = A_1 \oplus A_2 \oplus \dots \oplus A_i$.

Here, $\oplus$ denotes bitwise $\mathrm{XOR}$.

    
        What is bitwise $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows:
        

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of $A$ and $B$ is $1$, and $0$ otherwise.

        For example, we have $3 \oplus 5 = 6$ (in base two: $011 \oplus 101 = 110$).  
        Generally, the bitwise $\mathrm{XOR}$ of $k$ non-negative integers $p_1, p_2, p_3, \dots, p_k$ is defined as $(\dots ((p_1 \oplus p_2) \oplus p_3) \oplus \dots \oplus p_k)$. We can prove that this value does not depend on the order of $p_1, p_2, p_3, \dots, p_k$.
    

## Constraints

- $1 \leq N \leq M &lt; 2^{60}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
2 4
```

```output1
5
```

For example, $(A_1,\ A_2)=(1,\ 3)$ counts, since $A_1 &lt; A_2$ and $B_1 &lt; B_2$ where $B_1=A_1=1,\ B_2=A_1\oplus A_2=2$.

The other pairs that count are $(A_1,\ A_2)=(1,\ 2),\ (1,\ 4),\ (2,\ 4),\ (3,\ 4)$.

```input2
4 4
```

```output2
0
```

```input3
10 123456789
```

```output3
205695670
```