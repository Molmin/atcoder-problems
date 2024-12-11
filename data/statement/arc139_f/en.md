Score : $1000$ points

## Problem Statement

PCT made the following problem.

    **Xor Optimization Problem**
    

You are given a sequence of non-negative integers of length $N$: $A_1,A_2,...,A_N$. When it is allowed to choose any number of elements in $A$, what is the maximum possible $\mathrm{XOR}$ of the chosen values?

Nyaan thought it was too easy and revised it to the following.

    **Many Xor Optimization Problems**
    

There are $2^{NM}$ sequences of length $N$ consisting of integers between $0$ and $2^M-1$. Find the sum, modulo $998244353$, of the answers to **Xor Optimization Problem** for all those sequences.

Solve **Many Xor Optimization Problems**.

    
        What is bitwise $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows:
        

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of $A$ and $B$ is $1$, and $0$ otherwise.

        For example, we have $3 \oplus 5 = 6$ (in base two: $011 \oplus 101 = 110$).  
        Generally, the bitwise $\mathrm{XOR}$ of $k$ non-negative integers $p_1, p_2, p_3, \dots, p_k$ is defined as $(\dots ((p_1 \oplus p_2) \oplus p_3) \oplus \dots \oplus p_k)$. We can prove that this value does not depend on the order of $p_1, p_2, p_3, \dots, p_k$.
    

## Constraints

- $1 \le N,M \le 250000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
2 1
```

```output1
3
```

We are to solve **Xor Optimization Problem** for all sequences of length $2$ consisting of integers between $0$ and $1$.

- The answer for $A=(0,0)$ is $0$.
- The answer for $A=(0,1)$ is $1$.
- The answer for $A=(1,0)$ is $1$.
- The answer for $A=(1,1)$ is $1$.

Thus, the final answer is $0+1+1+1=3$.

```input2
3 4
```

```output2
52290
```

```input3
1234 5678
```

```output3
495502261
```