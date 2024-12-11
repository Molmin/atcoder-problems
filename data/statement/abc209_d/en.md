Score : $400$ points

## Problem Statement

The Kingdom of Takahashi is made up of $N$ towns and $N-1$ roads, where the towns are numbered $1$ through $N$. The $i$-th road $(1 \leq i \leq N-1)$ connects Town $a_i$ and Town $b_i$, so that you can get from every town to every town by using some roads. **All the roads have the same length.**

You will be given $Q$ queries. In the $i$-th query $(1 \leq i \leq Q)$, given integers $c_i$ and $d_i$, solve the following problem:

- Takahashi is now at Town $c_i$ and Aoki is now at Town $d_i$. They will leave the towns simultaneously and start traveling at the same speed, Takahashi heading to Town $d_i$ and Aoki heading to Town $c_i$. Determine whether they will meet at a town or halfway along a road. Here, assume that both of them travel along the shortest paths, and the time it takes to pass towns is negligible.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq Q \leq 10^5$
- $1 \leq a_i &lt; b_i \leq N\, (1 \leq i \leq N-1)$
- $1 \leq c_i &lt; d_i \leq N\, (1 \leq i \leq Q)$
- All values in input are integers.
- It is possible to get from every town to every town by using some roads.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\hspace{0.6cm}\vdots$
> 
> $a_{N-1}$ $b_{N-1}$
> 
> $c_1$ $d_1$
> 
> $c_2$ $d_2$
> 
> $\hspace{0.6cm}\vdots$
> 
> $c_Q$ $d_Q$

## Output

Print $Q$ lines.
The $i$-th line $(1 \leq i \leq Q)$ should contain `Town` if Takahashi and Aoki will meet at a town in the $i$-th query, and `Road` if they meet halfway along a road in that query.

```input1
4 1
1 2
2 3
2 4
1 2
```

```output1
Road
```

In the first and only query, Takahashi and Aoki simultaneously leave Town $1$ and Town $2$, respectively, and they will meet halfway along the $1$-st road, so we should print `Road`.

```input2
5 2
1 2
2 3
3 4
4 5
1 3
1 5
```

```output2
Town
Town
```

In the first query, Takahashi and Aoki simultaneously leave Town $1$ and Town $3$, respectively, and they will meet at Town $2$, so we should print `Town`.

In the first query, Takahashi and Aoki simultaneously leave Town $1$ and Town $5$, respectively, and they will meet at Town $3$, so we should print `Town`.

```input3
9 9
2 3
5 6
4 8
8 9
4 5
3 4
1 9
3 7
7 9
2 5
2 6
4 6
2 4
5 8
7 8
3 6
5 6
```

```output3
Town
Road
Town
Town
Town
Town
Road
Road
Road
```