Score : $900$ points

## Problem Statement

You are given a prime number $p$ and an $N \times N$ matrix $A = (A_{i,j})$ ($1\leq i,j\leq N$). Each element of $A$ is an integer between $0$ and $p-1$, inclusive.

Consider a matrix $B$ obtained by replacing each zero in $A$ with an integer between $1$ and $p-1$, inclusive. There are $(p-1)^K$ such matrices $B$, where $K$ is the number of zeros in $A$.

Find each element, modulo $p$, of the sum of $B^p$ over all possible $B$.

## Constraints

- $1 \leq N \leq 100$
- $p$ is a prime such that $1 \leq p \leq 10^9$.
- $0 \leq A_{i,j} \leq p-1$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $p$
> 
> $A_{1,1}$ $\cdots$ $A_{1,N}$
> 
> $\vdots$
> 
> $A_{N,1}$ $\cdots$ $A_{N,N}$

## Output

Print $N$ lines.

The $i$-th line should contain, in the order $j=1,\ldots,N$, the $(i,j)$ element of the sum, modulo $p$, of $B^p$ over all possible $B$, separated by spaces.

```input1
2 3
0 1
0 2
```

```output1
0 2
1 2
```

$B^p$ for all possible $B$ are as follows:

- $\begin{pmatrix}1&amp;1 \\ 1&amp;2\end{pmatrix}^3=\begin{pmatrix}5&amp;8 \\ 8&amp;13\end{pmatrix}$
- $\begin{pmatrix}1&amp;1 \\ 2&amp;2\end{pmatrix}^3=\begin{pmatrix}9&amp;9 \\ 18&amp;18\end{pmatrix}$
- $\begin{pmatrix}2&amp;1 \\ 1&amp;2\end{pmatrix}^3=\begin{pmatrix}14&amp;13 \\ 13&amp;14\end{pmatrix}$
- $\begin{pmatrix}2&amp;1 \\ 2&amp;2\end{pmatrix}^3=\begin{pmatrix}20&amp;14 \\ 28&amp;20\end{pmatrix}$

Print each element, modulo $p=3$, of their sum $\begin{pmatrix}48&amp;44 \\ 67&amp;65\end{pmatrix}$.

```input2
3 2
1 0 0
0 1 0
0 0 1
```

```output2
1 1 1
1 1 1
1 1 1
```

$B^p$ for all possible $B$ are as follows:

- $\begin{pmatrix}1&amp;1&amp;1 \\ 1&amp;1&amp;1 \\ 1&amp;1&amp;1\end{pmatrix}^2=\begin{pmatrix}3&amp;3&amp;3\\3&amp;3&amp;3\\3&amp;3&amp;3\end{pmatrix}$

Print each element, modulo $p=2$, of their sum $\begin{pmatrix}3&amp;3&amp;3\\3&amp;3&amp;3\\3&amp;3&amp;3\end{pmatrix}$.

```input3
4 13
0 1 2 0
3 4 0 5
0 6 0 7
8 9 0 0
```

```output3
8 0 6 5
11 1 8 5
8 0 4 12
8 0 1 9
```