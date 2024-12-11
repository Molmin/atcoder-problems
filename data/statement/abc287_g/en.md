Score : $600$ points

## Problem Statement

Takahashi has $10^{100}$ cards of each of $N$ kinds.  Initially, the score and quota of the $i$-th kind of card are set to $a_i$ and $b_i$, respectively.

Given $Q$ queries in the following formats, process them in order.

- `1 x y`: set the score of the $x$-th kind of card to $y$.
- `2 x y`: set the quota of the $x$-th kind of card to $y$.
- `3 x`: if one can choose $x$ cards subject to the following condition, print the maximum possible sum of the scores of the chosen cards; print `-1` otherwise.-   - The number of chosen cards of each kind does not exceed its quota.

## Constraints

- $1 \leq N,Q \leq 2 \times 10^5$
- $0 \leq a_i \leq 10^9$
- $0 \leq b_i \leq 10^4$
- For each query of the $1$-st kind, $1 \leq x \leq N$ and $0 \leq y \leq 10^9$.
- For each query of the $2$-nd kind, $1 \leq x \leq N$ and $0 \leq y \leq 10^4$.
- For each query of the $3$-rd kind, $1 \leq x \leq 10^9$.
- There is at least one query of the $3$-rd kind.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format, where $\mathrm{query}_i$ denotes the $i$-th query:

> $N$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_N$ $b_N$
> 
> $Q$
> 
> $\mathrm{query}_1$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

## Output

Print $M$ lines, where $M$ is the number of queries of the $3$-rd kind.<br>
The $i$-th line should contain the response to the $i$-th such query.

```input1
3
1 1
2 2
3 3
7
3 4
1 1 10
3 4
2 1 0
2 3 0
3 4
3 2
```

```output1
11
19
-1
4
```

For the first query of the $3$-rd kind, you can choose one card of the $2$-nd kind and three cards of the $3$-rd kind for a total score of $11$, which is the maximum.<br>
For the second such query, you can choose one card of the $1$-st kind and three cards of the $3$-rd kind for a total score of $19$, which is the maximum.<br>
For the third such query, you cannot choose four cards, so `-1` should be printed.<br>
For the fourth such query, you can choose two cards of the $2$-nd kind for a total score of $4$, which is the maximum.