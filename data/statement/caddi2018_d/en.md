Score : $900$ points

## Problem Statement

Takahashi has an $N \times N$ grid. The square at the $i$-th row and the $j$-th column of the grid is denoted by $(i,j)$.
Particularly, the top-left square of the grid is $(1,1)$, and the bottom-right square is $(N,N)$.

An integer, $0$ or $1$, is written on $M$ of the squares in the Takahashi's grid.
Three integers $a_i,b_i$ and $c_i$ describe the $i$-th of those squares with integers written on them: the integer $c_i$ is written on the square $(a_i,b_i)$.

Takahashi decides to write an integer, $0$ or $1$, on each of the remaining squares so that the condition below is satisfied.
Find the number of such ways to write integers, modulo $998244353$.

- For all $1\leq i &lt; j\leq N$, there are even number of $1$s in the square region whose top-left square is $(i,i)$ and whose bottom-right square is $(j,j)$.

## Constraints

- $2 \leq N \leq 10^5$
- $0 \leq M \leq min(5 \times 10^4,N^2)$
- $1 \leq a_i,b_i \leq N(1\leq i\leq M)$
- $0 \leq c_i \leq 1(1\leq i\leq M)$
- If $i \neq j$, then $(a_i,b_i) \neq (a_j,b_j)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$ $c_1$
> 
> $:$
> 
> $a_M$ $b_M$ $c_M$

## Output

Print the number of possible ways to write integers, modulo $998244353$.

```input1
3 3
1 1 1
3 1 0
2 3 1
```

```output1
8
```

For example, the following ways to write integers satisfy the condition:

```output1
101   111
011   111
000   011
```

```input2
4 5
1 3 1
2 4 0
2 3 1
4 2 1
4 4 1
```

```output2
32
```

```input3
3 5
1 3 1
3 3 0
3 1 0
2 3 1
3 2 1
```

```output3
0
```

```input4
4 8
1 1 1
1 2 0
3 2 1
1 4 0
2 1 1
1 3 0
3 4 1
4 4 1
```

```output4
4
```

```input5
100000 0
```

```output5
342016343
```