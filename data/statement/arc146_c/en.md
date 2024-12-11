Score : $600$ points

## Problem Statement

How many sets $S$ consisting of non-negative integers between $0$ and $2^N-1$ (inclusive) satisfy the following condition? Print the count modulo $998244353$.

- Every non-empty subset $T$ of $S$ satisfies at least one of the following:-   - The number of elements in $T$ is odd.
-   - The $\mathrm{XOR}$ of the elements in $T$ is not zero.

    
        What is $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows:
        

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of the digits in that place of $A$ and $B$ is $1$, and $0$ otherwise.

        For example, we have $3 \oplus 5 = 6$ (in base two: $011 \oplus 101 = 110$).  
        Generally, the bitwise $\mathrm{XOR}$ of $k$ non-negative integers $p_1, p_2, p_3, \dots, p_k$ is defined as $(\dots ((p_1 \oplus p_2) \oplus p_3) \oplus \dots \oplus p_k)$. We can prove that this value does not depend on the order of $p_1, p_2, p_3, \dots, p_k$.
    

## Constraints

- $1 \le N \le 2 \times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
2
```

```output1
15
```

Sets such as $\lbrace 0,2,3 \rbrace$, $\lbrace 1 \rbrace$, and $\lbrace \rbrace$ satisfy the condition.

On the other hand, $\lbrace 0,1,2,3 \rbrace$ does not.

This is because the subset $\lbrace 0,1,2,3 \rbrace$ of $\lbrace 0,1,2,3 \rbrace$ has an even number of elements, whose bitwise $\mathrm{XOR}$ is $0$.

```input2
146
```

```output2
743874490
```