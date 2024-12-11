Score: $800$ points

## Problem Statement

You are given a sequence of $N$ non-negative integers $A=(A_1,A_2,\dots,A_N)$. Consider performing the following operation $N-1$ times on this sequence to obtain a sequence of length $1$:

- Let $n$ be the length of $A$. First, rearrange the elements in $A$ in any order you like.
Then, replace $A$ with a sequence of $n-1$ non-negative integers $(A_1 \oplus A_2, A_2 \oplus A_3, \dots, A_{n-1} \oplus A_n)$.

Here, $\oplus$ represents the bitwise $\mathrm{XOR}$ operation.

Let $X$ be the value of the term contained in the sequence of length $1$ obtained after $N-1$ operations. Find the maximum possible value of $X$.

    
        What is the bitwise $\mathrm{XOR}$ operation?
    
    

        The bitwise $\mathrm{XOR}$ of two non-negative integers $A$ and $B$, denoted as $A \oplus B$, is defined as follows:
        

- In the binary representation of $A \oplus B$, the digit at the $2^k$ ($k \geq 0$) position is $1$ if the digit at the $2^k$ position is $1$ in $A$ or $B$ but not both, and $0$ otherwise.

        For example, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).  
        In general, the bitwise $\mathrm{XOR}$ of $k$ non-negative integers $p_1, p_2, p_3, \dots, p_k$ is defined as $(\dots ((p_1 \oplus p_2) \oplus p_3) \oplus \dots \oplus p_k)$, and it can be proved that this does not depend on the order of $p_1, p_2, p_3, \dots, p_k$.  
    

## Constraints

- $2 \leq N \leq 100$
- $0 \leq A_i &lt; 2^{60}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
4
1 2 3 4
```

```output1
7
```

The sequence $A$ can be transformed into $A=(7)$ by the following three operations:

- In the first operation, rearrange $A=(1,2,3,4)$ to $(3,1,4,2)$. $A$ is replaced with $(3 \oplus 1, 1 \oplus 4, 4 \oplus 2) = (2,5,6)$.
- In the second operation, rearrange $A=(2,5,6)$ to $(2,6,5)$. $A$ is replaced with $(2 \oplus 6, 6 \oplus 5) = (4,3)$.
- In the third operation, rearrange $A=(4,3)$ to $(4,3)$. $A$ is replaced with $(4 \oplus 3) = (7)$.

```input2
13
451745518671773958 43800508384422957 153019271028231120 577708532586013562 133532134450358663 619750463276496276 615201966367277237 943395749975730789 813856754125382728 705285621476908966 912241698686715427 951219919930656543 124032597374298654
```

```output2
1152905479775702586
```