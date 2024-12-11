Score : $300$ points

## Problem Statement

We have a multiset of integers $S$, which is initially empty.

Given $Q$ queries, process them in order.
Each query is of one of the following types.

- <p>`1 x`: Insert an $x$ into $S$.</p>
- <p>`2 x c`: Remove an $x$ from $S$ $m$ times, where $m = \mathrm{min}(c,($ the number of $x$'s contained in $S))$.</p>
- <p>`3` : Print $($ maximum value of $S)-($ minimum value of $S)$.  It is guaranteed that $S$ is not empty when this query is given.</p>

## Constraints

- $1 \leq Q \leq 2\times 10^5$
- $0 \leq x \leq 10^9$
- $1 \leq c \leq Q$
- When a query of type `3` is given, $S$ is not empty.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $Q$
> 
> $\mathrm{query}_1$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

$\mathrm{query}_i$, which denotes the $i$-th query, is in one of the following formats:

> $1$ $x$
> $2$ $x$ $c$
> $3$

## Output

Print the answers for the queries of type `3` in the given order, separated by newlines.

```input1
8
1 3
1 2
3
1 2
1 7
3
2 2 3
3
```

```output1
1
5
4
```

The multiset $S$ transitions as follows.

- $1$-st query: insert $3$ into $S$.  $S$ is now $\lbrace 3 \rbrace$.
- $2$-nd query: insert $2$ into $S$.  $S$ is now $\lbrace 2, 3 \rbrace$.
- $3$-rd query: the maximum value of $S = \lbrace 2, 3\rbrace$ is $3$ and its minimum value is $2$, so print $3-2=1$.
- $4$-th query: insert $2$ into $S$.  $S$ is now $\lbrace 2,2,3 \rbrace$.
- $5$-th query: insert $7$ into $S$.  $S$ is now $\lbrace 2, 2,3, 7\rbrace$.
- $6$-th query: the maximum value of $S = \lbrace 2,2,3, 7\rbrace$ is $7$ and its minimum value is $2$, so print $7-2=5$.
- $7$-th query: since there are two $2$'s in $S$ and $\mathrm{min(2,3)} = 2$, remove $2$ from $S$ twice.  $S$ is now $\lbrace 3, 7\rbrace$.
- $8$-th query: the maximum value of $S = \lbrace 3, 7\rbrace$ is $7$ and its minimum value is $3$, so print $7-3=4$.

```input2
4
1 10000
1 1000
2 100 3
1 10
```

```output2

```

If the given queries do not contain that of type $3$, nothing should be printed.