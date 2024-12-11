Score : $700$ points

## Problem Statement

Given are integers $L$, $R$, and $V$.
Find the number of pairs of integers $(l,r)$ that satisfy both of the conditions below, modulo $998244353$.

- $L \leq l \leq r \leq R$
- $l \oplus (l+1) \oplus \cdots \oplus r=V$

Here, $\oplus$ denotes the bitwise $\mathrm{XOR}$ operation. 

    
        What is bitwise $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows:
        

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of $A$ and $B$ is $1$, and $0$ otherwise.

        For example, we have $3 \oplus 5 = 6$ (in base two: $011 \oplus 101 = 110$).  
        Generally, the bitwise $\mathrm{XOR}$ of $k$ integers $p_1, p_2, p_3, \dots, p_k$ is defined as $(\dots ((p_1 \oplus p_2) \oplus p_3) \oplus \dots \oplus p_k)$. We can prove that this value does not depend on the order of $p_1, p_2, p_3, \dots p_k$.
    

## Constraints

- $1 \leq L \leq R \leq 10^{18}$
- $0 \leq V \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $L$ $R$ $V$

## Output

Print the answer.

```input1
1 3 3
```

```output1
2
```

The two pairs satisfying the conditions are $(l,r)=(1,2)$ and $(l,r)=(3,3)$.

```input2
10 20 0
```

```output2
6
```

```input3
1 1 1
```

```output3
1
```

```input4
12345 56789 34567
```

```output4
16950
```