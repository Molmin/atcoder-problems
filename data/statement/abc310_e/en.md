Score : $450$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `0` and `1`.
It describes a length-$N$ sequence $A=(A _ 1,A _ 2,\ldots,A _ N)$. If the $i$-th character of $S$ $(1\leq i\leq N)$ is `0`, then $A _ i=0$; if it is `1`, then $A _ i=1$.

Find the following:

\[\sum _ {1\leq i\leq j\leq N}(\cdots((A _ i\barwedge A _ {i+1})\barwedge A _ {i+2})\barwedge\cdots\barwedge A _ j)\]

More formally, find $\displaystyle\sum _ {i=1} ^ {N}\sum _ {j=i} ^ Nf(i,j)$ for $f(i,j)\ (1\leq i\leq j\leq N)$ defined as follows:

\[f(i,j)=\left\{\begin{matrix}
A _ i&amp;(i=j)\\
f(i,j-1)\barwedge A _ j\quad&amp;(i\lt j)
\end{matrix}\right.\]

Here, $\barwedge$, NAND, is a binary operator satisfying the following:

\[0\barwedge0=1,0\barwedge1=1,1\barwedge0=1,1\barwedge1=0.\]

## Constraints

- $1\leq N\leq10^6$
- $S$ is a string of length $N$ consisting of `0` and `1`.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer in a single line.

```input1
5
00110
```

```output1
9
```

Here are the values of $f(i,j)$ for the pairs $(i,j)$ such that $1\leq i\leq j\leq N$:

- $f(1,1)=0=0$
- $f(1,2)=0\barwedge0=1$
- $f(1,3)=(0\barwedge0)\barwedge1=0$
- $f(1,4)=((0\barwedge0)\barwedge1)\barwedge1=1$
- $f(1,5)=(((0\barwedge0)\barwedge1)\barwedge1)\barwedge0=1$
- $f(2,2)=0=0$
- $f(2,3)=0\barwedge1=1$
- $f(2,4)=(0\barwedge1)\barwedge1=0$
- $f(2,5)=((0\barwedge1)\barwedge1)\barwedge0=1$
- $f(3,3)=1=1$
- $f(3,4)=1\barwedge1=0$
- $f(3,5)=(1\barwedge1)\barwedge0=1$
- $f(4,4)=1=1$
- $f(4,5)=1\barwedge0=1$
- $f(5,5)=0=0$

Their sum is $0+1+0+1+1+0+1+0+1+1+0+1+1+1+0=9$, so print $9$.

Note that $\barwedge$ does not satisfy the associative property.
For instance, $(1\barwedge1)\barwedge0=0\barwedge0=1\neq0=1\barwedge1=1\barwedge(1\barwedge0)$.

```input2
30
101010000100101011010011000010
```

```output2
326
```