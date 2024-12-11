Score : $2000$ points

## Problem Statement

For an undirected tree $t$, let us define a rational number $f(t)$ as follows.

- Let $n$ be the number of vertices in $t$.
- If $n=1$: Let $f(t)=1$.
- If $n \geq 2$:-   - For an edge $e$ in $t$, we denote by $t_x(e)$ and $t_y(e)$ the two trees that result from deleting $e$ from $t$ (in arbitrary order).
-   - Let $f(t)=(\sum_{e \in t} f(t_x(e)) \times f(t_y(e)))/n$.

You are given a tree $T$ with $N$ vertices numbered $1$ to $N$.
The $i$-th edge connects Vertex $A_i$ and Vertex $B_i$.

Find the value $f(T)$ $\text{mod }{998244353}$.

What is a rational number $\text{mod }{998244353}$?

Under the Constraints of this problem, when the sought rational number is represented as $\frac{P}{Q}$, it can be proved that $Q \neq 0 \pmod{998244353}$. Therefore, there is a unique integer $R$ such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$. Find this $R$.

## Constraints

- $2 \leq N \leq 5000$
- $1 \leq A_i,B_i \leq N$
- The given graph is a tree.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$

## Output

Print the answer.

```input1
2
1 2
```

```output1
499122177
```

We have $f(T)=1/2$.

```input2
3
1 2
2 3
```

```output2
332748118
```

We have $f(T)=1/3$.

```input3
4
1 2
2 3
3 4
```

```output3
103983787
```

```input4
10
4 5
1 9
6 1
8 4
5 9
4 7
3 10
5 2
4 3
```

```output4
462781191
```