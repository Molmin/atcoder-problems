Score : $300$ points

## Problem Statement

You are given a length-$N$ sequence of non-negative integers.<br>
When $B$ is a sequence obtained by choosing $K$ elements from $A$ and concatenating them without changing the order, find the maximum possible value of $MEX(B)$.

Here, for a sequence $X$, we define $MEX(X)$ as the unique non-negative integer $m$ that satisfies the following conditions:

- Every integer $i$ such that $0 \le i &lt; m$ is contained in $X$.
- $m$ is not contained in $X$.

## Constraints

- All values in the input are integers.
- $1 \le K \le N \le 3 \times 10^5$
- $0 \le A_i \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
7 3
2 0 2 3 2 1 9
```

```output1
3
```

In this input, $A=(2,0,2,3,2,1,9)$, and you obtain the sequence $B$ by picking $K=3$ elements.  For example,

- If the $1$-st, $2$-nd, and $3$-rd elements are chosen, $MEX(B)=MEX(2,0,2)=1$.
- If the $3$-rd, $4$-th, and $6$-th elements are chosen, $MEX(B)=MEX(2,3,1)=0$.
- If the $2$-nd, $6$-th, and $7$-th elements are chosen, $MEX(B)=MEX(0,1,9)=2$.
- If the $2$-nd, $3$-rd, and $6$-th elements are chosen, $MEX(B)=MEX(0,2,1)=3$.

The maximum possible $MEX$ is $3$.