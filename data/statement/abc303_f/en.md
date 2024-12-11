Score : $525$ points

## Problem Statement

A monster with health $H$ has appeared in front of you, and a turn-based battle has started.

In each turn $1,2, \cdots$, you cast one of $N$ spells, spells $1, \cdots ,N$.

If you cast spell $i$ in turn $j$, the monster's health reduces by $d_i$ in each turn $j,j+1, \cdots ,j+t_i - 1$.

Find the earliest turn that you can make the monster's health $0$ or less.

## Constraints

- $1 \leq N \leq 3 \times 10^5$
- $1 \leq H \leq 10^{18}$
- $1 \leq t_i,d_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $H$
> 
> $t_1$ $d_1$
> 
> $\vdots$
> 
> $t_N$ $d_N$

## Output

Print the answer.

```input1
2 20
2 2
5 1
```

```output1
6
```

The following procedure makes the monster's health $0$ or less in turn $6$, which is the earliest.

- Cast spell $1$ in turn $1$. Due to the spell cast in turn $1$, the monster's health reduces by $2$ and becomes $18$.
- Cast spell $2$ in turn $2$. Due to the spells cast in turns $1$ and $2$, the monster's health reduces by $2+1=3$ and becomes $15$.
- Cast spell $1$ in turn $3$. Due to the spells cast in turns $2$ and $3$, the monster's health reduces by $1+2=3$ and becomes $12$.
- Cast spell $2$ in turn $4$. Due to the spells cast in turns $2,3$ and $4$, the monster's health reduces by $1+2+1=4$ and becomes $8$.
- Cast spell $1$ in turn $5$. Due to the spells cast in turns $2,4$ and $5$, the monster's health reduces by $1+1+2=4$ and becomes $4$.
- Cast spell $2$ in turn $6$. Due to the spells cast in turns $2,4,5$ and $6$, the monster's health reduces by $1+1+2+1=5$ and becomes $-1$.

```input2
10 200
1 21
1 1
1 1
8 4
30 1
3 1
10 2
8 1
9 1
4 4
```

```output2
9
```