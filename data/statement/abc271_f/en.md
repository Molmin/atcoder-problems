Score : $500$ points

## Problem Statement

There is a grid with $N$ rows and $N$ columns.  We denote by $(i, j)$ the square at the $i$-th $(1 \leq i \leq N)$ row from the top and $j$-th $(1 \leq j \leq N)$ column from the left.<br>
Square $(i, j)$ has a non-negative integer $a_{i, j}$ written on it.

When you are at square $(i, j)$, you can move to either square $(i+1, j)$ or $(i, j+1)$.  Here, you are not allowed to go outside the grid.

Find the number of ways to travel from square $(1, 1)$ to square $(N, N)$ such that the exclusive logical sum of the integers written on the squares visited (including $(1, 1)$ and $(N, N)$) is $0$.

What is the exclusive logical sum?
The exclusive logical sum $a \oplus b$ of two integers $a$ and $b$ is defined as follows.

- The $2^k$'s place ($k \geq 0$) in the binary notation of $a \oplus b$ is $1$ if exactly one of the $2^k$'s places in the binary notation of $a$ and $b$ is $1$; otherwise, it is $0$.

For example, $3 \oplus 5 = 6$ (In binary notation: $011 \oplus 101 = 110$).
In general, the exclusive logical sum of $k$ integers $p_1, \dots, p_k$ is defined as $(\cdots ((p_1 \oplus p_2) \oplus p_3) \oplus \cdots \oplus p_k)$.  We can prove that it is independent of the order of $p_1, \dots, p_k$.

## Constraints

- $2 \leq N \leq 20$
- $0 \leq a_{i, j} \lt 2^{30} \, (1 \leq i, j \leq N)$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_{1, 1}$ $\ldots$ $a_{1, N}$
> 
> $\vdots$
> 
> $a_{N, 1}$ $\ldots$ $a_{N, N}$

## Output

Print the answer.

```input1
3
1 5 2
7 0 5
4 2 3
```

```output1
2
```

The following two ways satisfy the condition:

- $(1, 1) \rightarrow (1, 2) \rightarrow (1, 3) \rightarrow (2, 3) \rightarrow (3, 3)$;
- $(1, 1) \rightarrow (2, 1) \rightarrow (2, 2) \rightarrow (2, 3) \rightarrow (3, 3)$.

```input2
2
1 2
2 1
```

```output2
0
```

```input3
10
1 0 1 0 0 1 0 0 0 1
0 0 0 1 0 1 0 1 1 0
1 0 0 0 1 0 1 0 0 0
0 1 0 0 0 1 1 0 0 1
0 0 1 1 0 1 1 0 1 0
1 0 0 0 1 0 0 1 1 0
1 1 1 0 0 0 1 1 0 0
0 1 1 0 0 1 1 0 1 0
1 0 1 1 0 0 0 0 0 0
1 0 1 1 0 0 1 1 1 0
```

```output3
24307
```