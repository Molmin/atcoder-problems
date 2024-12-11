Score : $300$ points

## Problem Statement

Print all integer sequences of length $N$ that satisfy the following conditions, in ascending lexicographical order.

- The $i$-th element is between $1$ and $R_i$, inclusive.
- The sum of all elements is a multiple of $K$.

 What is lexicographical order for sequences?
A sequence $A = (A_1, \ldots, A_{|A|})$ is **lexicographically smaller** than $B = (B_1, \ldots, B_{|B|})$ if either 1. or 2. below holds:

1. $|A|&lt;|B|$ and $(A_{1},\ldots,A_{|A|}) = (B_1,\ldots,B_{|A|})$.
2. There exists an integer $1\leq i\leq \min\{|A|,|B|\}$ such that both of the following are true:
1.    - $(A_{1},\ldots,A_{i-1}) = (B_1,\ldots,B_{i-1})$
2.    - $A_i &amp;lt; B_i$

## Constraints

- All input values are integers.
- $1 \le N \le 8$
- $2 \le K \le 10$
- $1 \le R_i \le 5$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $R_1$ $R_2$ $\dots$ $R_N$

## Output

Print the answer in the following format, where $X$ is the number of sequences to print, the $i$-th of which is $A_i=(A_{i,1},A_{i,2},\dots,A_{i,N})$:

> $A_{1,1}$ $A_{1,2}$ $\dots$ $A_{1,N}$
> 
> $A_{2,1}$ $A_{2,2}$ $\dots$ $A_{2,N}$
> 
> $\vdots$
> 
> $A_{X,1}$ $A_{X,2}$ $\dots$ $A_{X,N}$

```input1
3 2
2 1 3
```

```output1
1 1 2
2 1 1
2 1 3
```

There are three sequences to be printed, which are $(1,1,2),(2,1,1),(2,1,3)$ in lexicographical order.

```input2
1 2
1
```

```output2

```

There may be no sequences to print.<br>
In this case, the output can be empty.

```input3
5 5
2 3 2 3 2
```

```output3
1 1 1 1 1
1 2 2 3 2
1 3 1 3 2
1 3 2 2 2
1 3 2 3 1
2 1 2 3 2
2 2 1 3 2
2 2 2 2 2
2 2 2 3 1
2 3 1 2 2
2 3 1 3 1
2 3 2 1 2
2 3 2 2 1
```