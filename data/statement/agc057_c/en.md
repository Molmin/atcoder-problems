Score : $1100$ points

## Problem Statement

You are given a positive integer $N$ and a sequence $A = (A_0, A_1, \ldots, A_{2^N-1})$ of $2^N$ terms, where each $A_i$ is an integer between $0$ and $2^N-1$ (inclusive) and $A_i\neq A_j$ holds if $i\neq j$.

You can perform the following two kinds of operations on $A$:

- Operation $+$: For every $i$, change $A_i$ to $(A_i + 1) \bmod 2^N$.
- Operation $\oplus$: Choose an integer $x$ between $0$ and $2^N-1$. For every $i$, change $A_i$ to $A_i\oplus x$.

Here, $\oplus$ denotes bitwise $\mathrm{XOR}$.

    
        What is bitwise $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows:
        

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of $A$ and $B$ is $1$, and $0$ otherwise.

        For example, we have $3 \oplus 5 = 6$ (in base two: $011 \oplus 101 = 110$).
    

<br>
Your objective is to make $A_i = i$ for every $i$. Determine whether it is achievable. It can be proved that, under the Constraints of this problem, one can achieve the objective with at most $10^6$ operations if it is achievable at all. Print such a sequence of operations.

## Constraints

- $1\leq N\leq 18$
- $0\leq A_i \leq 2^N - 1$
- $A_i\neq A_j$, if $i\neq j$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_0$ $A_1$ $\ldots$ $A_{2^N - 1}$

## Output

If it is possible to make $A_i = i$ for every $i$, print `Yes`; otherwise, print `No`.

In the case of `Yes`, it should be followed by a sequence of operations that achieves the objective, in the following format:

> $K$
> 
> $x_1$ $x_2$ $\ldots$ $x_K$

Here, $K$ is a non-negative integer representing the number of operations, which must satisfy $0\leq K\leq 10^6$; $x_i$ is an integer representing the $i$-th operation, which should be set as follows.

- If the $i$-th operation is Operation $+$, $x_i=-1$.
- If the $i$-th operation is Operation $\oplus$, $x_i$ should be the integer chosen in that operation.

If there are multiple possible solutions, you may print any of them.

```input1
3
5 0 3 6 1 4 7 2
```

```output1
Yes
4
-1 6 -1 1
```

The sequence of operations above changes the sequence $A$ as follows.

- Initially: $A = (5,0,3,6,1,4,7,2)$
- Operation $+$: $A = (6,1,4,7,2,5,0,3)$
- Operation $\oplus$ ($x = 6$)：$A = (0,7,2,1,4,3,6,5)$
- Operation $+$: $A = (1,0,3,2,5,4,7,6)$
- Operation $\oplus$ ($x = 1$)：$A = (0,1,2,3,4,5,6,7)$

```input2
3
2 5 4 3 6 1 0 7
```

```output2
No
```

No sequence of operations achieves the objective.

```input3
3
0 1 2 3 4 5 6 7
```

```output3
Yes
0
```

Performing zero operations achieves the objective. Whether an empty line is printed or not does not affect the verdict.