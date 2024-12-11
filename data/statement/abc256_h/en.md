Score : $600$ points

## Problem Statement

You are given $N$, $Q$, and $A=(a_1,\ldots,a_N)$.<br>
Process $Q$ queries described below.  Each query is of one of the following three kinds:

- `1 L R x`: for $i=L,L+1,\dots,R$, update the value of $a_i$ to $\displaystyle \left\lfloor \frac{a_i}{x} \right\rfloor$.
- `2 L R y`: for $i=L,L+1,\dots,R$, update the value of $a_i$ to $y$.
- `3 L R`: print $\displaystyle\sum_{i=L}^R a_i$.

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $1 \leq Q \leq 10^5$
- $1 \leq L \leq R \leq N$
- $1 \leq a_i \leq 10^5$
- $2 \leq x \leq 10^5$
- $1 \leq y \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format, where $\text{query}_i$ denotes the $i$-th query to be processed:

> $N$ $Q$
> 
> $a_1$ $a_2$ $\dots$ $a_N$
> 
> $\text{query}_1$
> 
> $\text{query}_2$
> 
> $\vdots$
> 
> $\text{query}_Q$

Each query is given in one of the following three formats:

> $1$ $L$ $R$ $x$
> $2$ $L$ $R$ $y$
> $3$ $L$ $R$

## Output

Print the answer to the queries as specified in the Problem Statement, with newlines in between.

```input1
3 5
2 5 6
3 1 3
1 2 3 2
3 1 2
2 1 2 3
3 1 3
```

```output1
13
4
9
```

Initially, $A = (2, 5, 6)$.  Thus, the answer to the $1$-st query is $a_1 + a_2 + a_3 = 2 + 5 + 6 = 13$.<br>
When the $2$-nd query has been processed, $A = (2, 2, 3)$.  Thus, the answer to the $3$-rd query is $a_1 + a_2 = 2 + 2 = 4$.<br>
When the $4$-th query has been processed, $A = (3, 3, 3)$.  Thus, the answer to the $5$-th query is $a_1 + a_2 + a_3 = 3 + 3 + 3 = 9$.

```input2
6 11
10 3 5 20 6 7
3 1 6
1 2 4 3
3 1 3
2 1 4 10
3 3 6
1 3 6 2
2 1 4 5
3 1 6
2 1 3 100
1 2 5 6
3 1 4
```

```output2
51
12
33
26
132
```