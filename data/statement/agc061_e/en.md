Score : $1400$ points

## Problem Statement

There is a non-negative integer $X$ initially equal to $S$. One can perform the following operations, in any order, any number of times:

- Add $1$ to $X$. This has a cost of $A$.
- Choose $i$ between $1$ and $N$, and replace $X$ with $X \oplus Y_i$. This has a cost of $C_i$. Here, $\oplus$ denotes bitwise $\mathrm{XOR}$.

Find the smallest total cost to make $X$ equal to a given non-negative integer $T$, or report that this is impossible.

    
        What is bitwise $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows:
        

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of the digits in that place of $A$ and $B$ is $1$, and $0$ otherwise.

        For example, we have $3 \oplus 5 = 6$ (in base two: $011 \oplus 101 = 110$).  
        Generally, the bitwise $\mathrm{XOR}$ of $k$ non-negative integers $p_1, p_2, p_3, \dots, p_k$ is defined as $(\dots ((p_1 \oplus p_2) \oplus p_3) \oplus \dots \oplus p_k)$. We can prove that this value does not depend on the order of $p_1, p_2, p_3, \dots, p_k$.
    

## Constraints

- $1 \leq N \leq 8$
- $0 \leq S, T &lt; 2^{40}$
- $0 \leq A \leq 10^5$
- $0 \leq Y_i &lt; 2^{40}$ ($1 \leq i \leq N$)
- $0 \leq C_i \leq 10^{16}$ ($1 \leq i \leq N$)
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $S$ $T$ $A$
> 
> $Y_1$ $C_1$
> 
> $\vdots$
> 
> $Y_N$ $C_N$

## Output

If the task is impossible, print `-1`.
Otherwise, print the smallest total cost. 

```input1
1 15 0 1
8 2
```

```output1
5
```

You can make $X$ equal to $T$ in the following manner:

- Choose $i=1$ and replace $X$ with $X \oplus 8$ to get $X=7$. This has a cost of $2$.
- Add $1$ to $X$ to get $X=8$. This has a cost of $1$.
- Choose $i=1$ and replace $X$ with $X \oplus 8$ to get $X=0$. This has a cost of $2$.

```input2
3 21 10 100
30 1
12 1
13 1
```

```output2
3
```

```input3
1 2 0 1
1 1
```

```output3
-1
```

```input4
8 352217 670575 84912
239445 2866
537211 16
21812 6904
50574 8842
380870 5047
475646 8924
188204 2273
429397 4854
```

```output4
563645
```