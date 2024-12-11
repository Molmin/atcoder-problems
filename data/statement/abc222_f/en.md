Score : $500$ points

## Problem Statement

The Kingdom of AtCoder is composed of $N$ towns and $N-1$ roads.<br>
The towns are labeled as Town $1$, Town $2$, $\dots$, Town $N$.
Similarly, the roads are labeled as Road $1$, Road $2$, $\dots$, Road $N-1$.
Road $i$ connects Towns $A_i$ and $B_i$ bidirectionally, and you have to pay the toll of $C_i$ to go through it. For every pair of different towns $(i, j)$, it is possible to go from Town $A_i$ to Town $B_j$ via the roads.

You are given a sequence $D = (D_1, D_2, \dots, D_N)$, where $D_i$ is the cost to do sightseeing in Town $i$.
Let us define the travel cost $E_{i,j}$ from Town $i$ to Town $j$ as the total toll incurred when going from Town $i$ to Town $j$, plus $D_{j}$.

- More formally, $E_{i,j}$ is defined as $D_j + \displaystyle\sum_{l=0}^{k-1} c_l$, where the shortest path between $i$ and $j$ is $i = p_0, p_1, \dots, p_{k-1}, p_k = j$ and the toll for the road connecting Towns $p_{l}$ and $p_{l+1}$ is $c_l$.

For every $i$, find the maximum possible travel cost when traveling from Town $i$ to another town.

- More formally, for every $i$, find $\max_{1 \leq j \leq N, j \neq i} E_{i,j}$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$ $(1 \leq i \leq N-1)$
- $1 \leq B_i \leq N$ $(1 \leq i \leq N-1)$
- $1 \leq C_i \leq 10^9$ $(1 \leq i \leq N-1)$
- $1 \leq D_i \leq 10^9$ $(1 \leq i \leq N)$
- It is possible to travel from Town $i$ to Town $j$ via some number of roads, for a pair of integers $(i,j)$ such that $1 \leq i \lt j \leq N$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$ $C_{N-1}$
> 
> $D_1$ $D_2$ $\dots$ $D_N$

## Output

Print $N$ lines. The $i$-th line should contain $\displaystyle \max_{1 \leq j \leq N, j \neq i} E_{i,j}$.

```input1
3
1 2 2
2 3 3
1 2 3
```

```output1
8
6
6
```

The value of $E_{i,j}$ for every ordered pair of towns $(i,j)$ is as follows.

- $E_{1,2} = 2 + 2 = 4$
- $E_{1,3} = 5 + 3 = 8$
- $E_{2,1} = 2 + 1 = 3$
- $E_{2,3} = 3 + 3 = 6$
- $E_{3,1} = 5 + 1 = 6$
- $E_{3,2} = 3 + 2 = 5$

```input2
6
1 2 3
1 3 1
1 4 4
1 5 1
1 6 5
9 2 6 5 3 100
```

```output2
105
108
106
109
106
14
```

```input3
6
1 2 1000000000
2 3 1000000000
3 4 1000000000
4 5 1000000000
5 6 1000000000
1 2 3 4 5 6
```

```output3
5000000006
4000000006
3000000006
3000000001
4000000001
5000000001
```