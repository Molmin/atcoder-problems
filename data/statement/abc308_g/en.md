Score : $600$ points

## Problem Statement

There is a blackboard on which you can write integers.  Initially, no integer is written on the blackboard.  Given $Q$ queries, process them in order.

The query is of one of the following three kinds:

- <p>`1 x` : write an $x$ on the blackboard.</p>
- <p>`2 x` : erase an $x$ from the blackboard.  At the point this query is given, it is guaranteed that at least one $x$ is written on the blackboard.</p>
- <p>`3` : print the minimum possible bitwise XOR of two of the integers written on the blackboard.  At the point this query is processed, it is guaranteed that at least two integers are written on the blackboard.</p>

What is bitwise XOR?
The bitwise XOR of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows.

- When $A \oplus B$ is written in binary, the $2^k$s place ($k \geq 0$) is $1$ if exactly one of the $2^k$s places of $A$ and $B$ is $1$, and $0$ otherwise.

For instance, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).

## Constraints

- $1\leq Q \leq 3\times 10^5$
- $0\leq x &lt; 2 ^{30}$
- When a query $2$ is given, at least one $x$ is written on the blackboard.
- When a query $3$ is given, at least two integers are written on the blackboard.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $Q$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

In the $i$-th query, $\mathrm{query}_i$, the kind of query, $c_i$ (one of $1$, $2$, or $3$), is first given.
If $c_i = 1$ or $c_i = 2$, an integer $x$ is additionally given.

In other words, each query is in one of the following three formats.

> $1$ $x$
> $2$ $x$
> $3$

## Output

Print $q$ lines, where $q$ is the number of queries such that $c_i=3$.

The $j$-th $(1\leq j\leq q)$ line should contain the answer to the $j$-th such query.

```input1
9
1 2
1 10
3
1 3
3
2 2
3
1 10
3
```

```output1
8
1
9
0
```

After processing the $1$-st query, a $2$ is written on the blackboard.

After processing the $2$-nd query, a $2$ and a $10$ are written on the blackboard.

When processing the $3$-rd query, the minimum possible bitwise XOR of two of the integers written on the backboard is $2\oplus 10=8$.

After processing the $4$-th query, a $2$, a $3$, and a $10$ are written on the blackboard.

When processing the $5$-th query, the minimum possible bitwise XOR of two of the integers written on the backboard is $2\oplus 3=1$.

After processing the $6$-th query, a $3$ and a $10$ are written on the blackboard.

When processing the $7$-th query, the minimum possible bitwise XOR of two of the integers written on the backboard is $3\oplus 10=9$.

After processing the $8$-th query, a $3$ and two $10$s are written on the blackboard.

When processing the $9$-th query, the minimum possible bitwise XOR of two of the integers written on the backboard is $10\oplus 10=0$.