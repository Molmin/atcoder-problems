Score : $600$ points

## Problem Statement

You are creating an electrical circuit using $N$ parts numbered $1$ to $N$ and $M$ cables. 
These parts have a total of $M$ red terminals and $M$ blue terminals, with the $i$-th red terminal attached to part $R_i$ and the $i$-th blue terminal attached to part $B_i$. 
Each cable connects one red terminal and one blue terminal. 
In particular, it is allowed to connect two terminals attached to the same part.
You cannot connect two or more cables to a terminal. 
Therefore, there are $M!$ ways in total to connect the $M$ cables (the cables are not distinguished from each other).

Let $s$ be the number of connected components when seeing this circuit as a graph with parts as vertices and cables as edges. 
Find the expected value, modulo $998244353$, of $s$ when randomly choosing the way to connect the $M$ cables out of the $M!$ ways.

What does it mean to find an expected value modulo $998244353$?
It can be proved that the sought expected value is always a rational number.  
Also, under the constraints of this problem, it can be proved that when this value is expressed as $\frac{P}{Q}$ using two coprime integers $P$ and $Q$, there is exactly one integer $R$ that satisfies $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$.
Find this $R$.

## Constraints

- $1\leq N \leq 17$
- $1 \leq M \leq 10^5$
- $1 \leq R_i, B_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $R_1$ $R_2$ $\dots$ $R_M$
> 
> $B_1$ $B_2$ $\dots$ $B_M$

## Output

Print the expected value of $s$, modulo $998244353$.

```input1
3 2
1 2
3 2
```

```output1
499122178
```

Let $(i, j)$ denote the action of connecting the $i$-th red terminal and the $j$-th blue terminal with a cable.

- For $(1,1), (2,2)$: There will be two connected components, $\lbrace 1,3 \rbrace$ and $\lbrace 2 \rbrace$, so $s=2$.
- For $(1,2), (2,1)$: The whole graph constitutes one connected component, so $s=1$.

Thus, the expected value of $s$ is $\frac{3}{2} \equiv 499122178 \pmod {998244353}$.

```input2
17 5
1 1 1 1 1
1 1 1 1 1
```

```output2
17
```

$s=N$ no matter how you connect the cables.

```input3
8 10
2 4 7 1 7 6 1 4 8 1
5 1 5 2 5 8 4 6 1 3
```

```output3
608849831
```