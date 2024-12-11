Score : $600$ points

## Problem Statement

$N$ people numbered $1,2,\dots,N$ are standing in a row. Person $i$ wears Color $A_i$.

Answer $Q$ queries of the format below.

- You are given integers $l$ and $r$. Considering only Person $l,l+1,\dots,r$, how many pairs of people wearing the same color can be formed at most?

## Constraints

- All values in input are integers.
- $1 \le N \le 10^5$
- $1 \le Q \le 10^6$
- $1 \le A_i \le N$
- $1 \le l \le r \le N$ in each query.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $Q$
> 
> $\mathrm{Query}_1$
> 
> $\mathrm{Query}_2$
> 
> $\vdots$
> 
> $\mathrm{Query}_Q$

Here, $\mathrm{Query}_i$ represents the $i$-th query.

Each query is in the following format:

> $l$ $r$

## Output

Print $Q$ lines.
The $i$-th line should contain the answer for the $i$-th query as an integer.
The use of fast input and output methods is recommended because of potentially large input and output.

```input1
10
1 2 3 2 3 1 3 1 2 3
6
6 10
5 8
3 6
4 4
1 6
1 10
```

```output1
2
2
1
0
3
4
```

We have $A=(1,2,3,2,3,1,3,1,2,3)$. This input contains six queries.

The first query is $(l, r) = (6, 10)$. By pairing Person $6, 8$ and paring Person $7, 10$, we can form two pairs of people wearing the same color.

The second query is $(l, r) = (5, 8)$. By pairing Person $5, 7$ and paring Person $6, 8$, we can form two pairs of people wearing the same color.

There can be a query where $l=r$.