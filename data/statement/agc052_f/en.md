Score : $2000$ points

## Problem Statement

You are given a tree with $N$ vertices.
The vertices are numbered from $1$ to $N$, and the $i$-th edge connects vertices $u_i$ and $v_i$.

Initially, on each vertex of the tree is written number $1$.

In one operation, you can do the following:

- Choose any vertex $v$ of the tree. Let $X$ be the **XOR** of the values written in the neighbors of $v$. Then, if the number written on $v$ is $a_v$, replace it by $(a_v\ \mathrm{XOR}\ X)$.

You can perform this operation any finite (maybe zero) number of times. How many configurations can you achieve? As this number can be large, output it modulo $998244353$.

Two configurations are called different if there exists a vertex $v$, such that the numbers written in $v$ in these configurations are different. 

## Constraints

- $3 \le N \le 2\cdot 10^5$
- $1\le u_i, v_i \le N$
- $u_i \neq v_i$
- The input represents a valid tree.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

Output the number of configurations you can get from the initial state, modulo $998244353$.

```input1
4
1 2
2 3
3 4
```

```output1
10
```

We can get the following configurations ($abcd$ means vertices $1,2,3,4$ have $a,b,c,d$ written on them):
$1111$, $1110$, $1100$, $1000$, $0111$, $0110$, $0100$, $0011$, $0010$, $0001$.

```input2
5
1 2
1 3
1 4
1 5
```

```output2
24
```

```input3
6
1 3
2 3
3 4
4 5
4 6
```

```output3
40
```

```input4
9
1 2
2 3
1 4
4 5
1 6
6 7
7 8
8 9
```

```output4
255
```