Score : $500$ points

## Problem Statement

You are given a sequence of non-negative integers $A = (A_1, \ldots, A_N)$.
You can do the operation below any number of times (possibly zero).

- Choose an integer $x\in \{A_1,\ldots,A_N\}$.
- Replace $A_i$ with $A_i\oplus x$ for every $i$ ($\oplus$ denotes the bitwise $\mathrm{XOR}$ operation).

Find the maximum possible value of $\sum_{i=1}^N A_i$ after your operations.

    
        What is bitwise $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows:
        

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of $A$ and $B$ is $1$, and $0$ otherwise.

        For example, we have $3 \oplus 5 = 6$ (in base two: $011 \oplus 101 = 110$).
    

## Constraints

- $1\leq N \leq 3\times 10^{5}$
- $0\leq A_i &lt; 2^{30}$

## Input

Input is given from Standard Input from the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the maximum possible value of $\sum_{i=1}^N A_i$ after your operations.

```input1
5
1 2 3 4 5
```

```output1
19
```

Here is a sequence of operations that achieves $\sum_{i=1}^N A_i = 19$.

- Initially, the sequence $A$ is $(1,2,3,4,5)$.
- An operation with $x = 1$ changes it to $(0,3,2,5,4)$.
- An operation with $x = 5$ changes it to $(5,6,7,0,1)$, where $\sum_{i=1}^N A_i = 5 + 6 + 7 + 0 + 1 = 19$.

```input2
5
10 10 10 10 10
```

```output2
50
```

Doing zero operations achieves $\sum_{i=1}^N A_i = 50$.

```input3
5
3 1 4 1 5
```

```output3
18
```