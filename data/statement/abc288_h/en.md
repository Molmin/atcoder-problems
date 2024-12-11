Score : $600$ points

## Problem Statement

Print the number of integer sequences of length $N$, $A = (A_1, A_2, \ldots, A_N)$, that satisfy both of the following conditions, modulo $998244353$.

- $0 \leq A_1 \leq A_2 \leq \cdots \leq A_N \leq M$
- $A_1 \oplus A_2 \oplus \cdots \oplus A_N = X$

Here, $\oplus$ denotes bitwise XOR.

    
        What is bitwise XOR?
    
    

        The bitwise XOR of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows.
        

- When $A \oplus B$ is written in binary, the $k$-th lowest bit ($k \geq 0$) is $1$ if exactly one of the $k$-th lowest bits of $A$ and $B$ is $1$, and $0$ otherwise.

        For instance, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).

## Constraints

- $1 \leq N \leq 200$
- $0 \leq M \lt 2^{30}$
- $0 \leq X \lt 2^{30}$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $X$

## Output

Print the answer.

```input1
3 3 2
```

```output1
5
```

Here are the five sequences of length $N$ that satisfy both conditions in the statement: $(0, 0, 2), (0, 1, 3), (1, 1, 2), (2, 2, 2), (2, 3, 3)$.

```input2
200 900606388 317329110
```

```output2
788002104
```