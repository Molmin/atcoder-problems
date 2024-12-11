Score : $400$ points

## Problem Statement

The Republic of AtCoder has $N$ cities numbered $1$ through $N$ and $N-1$ roads numbered $1$ through $N-1$.
Road $i$ connects City $A_i$ and City $B_i$ bidirectionally. It is guaranteed that one can travel between every pair of cities using roads.

Takahashi will depart City $1$ and have a journey by repeating the following.

- If there are unvisited cities that are directly connected to the city Takahashi is in now, he goes to the city with the smallest number among those cities.
- Otherwise,-   - if he is in City $1$, he ends the journey;
-   - otherwise, he goes to the city he was in just before visiting the current city for the first time.

Find the sequence of cities visited by Takahashi in the order he visits them.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $1\leq A_i,B_i \leq N$
- It is possible to travel between every pair of cities using roads.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$

## Output

Print the sequence of cities visited by Takahashi in the order he visits them, including City $1$ at the beginning and end of the journey, with spaces in between.

```input1
4
1 2
4 2
3 1
```

```output1
1 2 4 2 1 3 1
```

His journey will be as follows.

- Start in City $1$.
- The unvisited cities directly connected to City $1$ are City $2$ and $3$. Go to the city with the smaller number, that is, City $2$.
- The unvisited city directly connected to City $2$ is City $4$. Go there.
- There is no unvisited city directly connected to City $4$. Go back to City $2$.
- There is no unvisited city directly connected to City $2$. Go to City $1$, where he was in just before visiting City $2$ for the first time.
- The unvisited city directly connected to City $1$ is City $3$. Go there.
- There is no unvisited city directly connected to City $3$. Go back to City $1$.
- There is no unvisited city directly connected to City $1$. End the journey.

```input2
5
1 2
1 3
1 4
1 5
```

```output2
1 2 1 3 1 4 1 5 1
```