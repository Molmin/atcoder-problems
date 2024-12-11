Score: $600$ points

## Problem Statement

You are given a sequence $A=(A_1,A_2,\dots,A_N)$ of length $N$.

Answer the following $Q$ queries. The $i$-th query is as follows:

- Find the sum of the elements among $A_{L_i},A_{L_i+1},\dots,A_{R_i}$ that are not greater than $X_i$.

Here, you need to answer these queries online.<br>
That is, only after you answer the current query is the next query revealed.

For this reason, instead of the $i$-th query itself, you are given encrypted inputs $\alpha_i, \beta_i, \gamma_i$ for the query.
Restore the original $i$-th query using the following steps and then answer it.

- Let $B_0=0$ and $B_i =$ (the answer to the $i$-th query).
- Then, the query can be decrypted as follows:-   - $L_i = \alpha_i \oplus B_{i-1}$
-   - $R_i = \beta_i \oplus B_{i-1}$
-   - $X_i = \gamma_i \oplus B_{i-1}$

Here, $x \oplus y$ denotes the bitwise XOR of $x$ and $y$.

What is bitwise XOR?
The bitwise XOR of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows:

- The digit in the $2^k$ place ($k \geq 0$) of $A \oplus B$ in binary is $1$ if exactly one of the corresponding digits of $A$ and $B$ in binary is $1$, and $0$ otherwise.

For example, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).

## Constraints

- All input values are integers.
- $1 \le N \le 2 \times 10^5$
- $0 \le A_i \le 10^9$
- $1 \le Q \le 2 \times 10^5$
- For the encrypted inputs, the following holds:-   - $0 \le \alpha_i, \beta_i, \gamma_i \le 10^{18}$
- For the decrypted queries, the following holds:-   - $1 \le L_i \le R_i \le N$
-   - $0 \le X_i \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $Q$
> 
> $\alpha_1$ $\beta_1$ $\gamma_1$
> 
> $\alpha_2$ $\beta_2$ $\gamma_2$
> 
> $\vdots$
> 
> $\alpha_Q$ $\beta_Q$ $\gamma_Q$

## Output

Print $Q$ lines.<br>
The $i$-th line should contain the answer to the $i$-th query.

```input1
8
2 0 2 4 0 2 0 3
5
1 8 3
10 12 11
3 3 2
3 6 5
12 0 11
```

```output1
9
2
0
8
5
```

The given sequence is $A=(2,0,2,4,0,2,0,3)$.<br>
This input contains five queries.

- Initially, $B_0=0$.
- The first query is $\alpha = 1, \beta = 8, \gamma = 3$.-   - After decryption, we get $L_i = \alpha \oplus B_0 = 1, R_i = \beta \oplus B_0 = 8, X_i = \gamma \oplus B_0 = 3$.
-   - The answer to this query is $9$. This becomes $B_1$.
- The next query is $\alpha = 10, \beta = 12, \gamma = 11$.-   - After decryption, we get $L_i = \alpha \oplus B_1 = 3, R_i = \beta \oplus B_1 = 5, X_i = \gamma \oplus B_1 = 2$.
-   - The answer to this query is $2$. This becomes $B_2$.
- The next query is $\alpha = 3, \beta = 3, \gamma = 2$.-   - After decryption, we get $L_i = \alpha \oplus B_2 = 1, R_i = \beta \oplus B_2 = 1, X_i = \gamma \oplus B_2 = 0$.
-   - The answer to this query is $0$. This becomes $B_3$.
- The next query is $\alpha = 3, \beta = 6, \gamma = 5$.-   - After decryption, we get $L_i = \alpha \oplus B_3 = 3, R_i = \beta \oplus B_3 = 6, X_i = \gamma \oplus B_3 = 5$.
-   - The answer to this query is $8$. This becomes $B_4$.
- The next query is $\alpha = 12, \beta = 0, \gamma = 11$.-   - After decryption, we get $L_i = \alpha \oplus B_4 = 4, R_i = \beta \oplus B_4 = 8, X_i = \gamma \oplus B_4 = 3$.
-   - The answer to this query is $5$. This becomes $B_5$.