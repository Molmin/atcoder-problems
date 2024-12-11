Score : $500$ points

## Problem Statement

In the Republic of AtCoder, there are $N$ cities numbered $1$ through $N$ and $M$ railroads numbered $1$ through $M$.

Railroad $i$ connects City $A_i$ and City $B_i$ bidirectionally. At time $0$, $K_i$, and all subsequent multiples of $K_i$, a train departs from each of these cities and head to the other city. The time each of these trains takes to reach the destination is $T_i$.

You are now at City $X$. Find the earliest time you can reach City $Y$ when you start the journey by taking a train that departs City $X$ not earlier than time $0$. If City $Y$ is unreachable, report that fact.<br>
The time it takes to transfer is ignorable. That is, at every city, you can transfer to a train that departs at the exact time your train arrives at that city.

## Constraints

- $2 \leq N \leq 10^5$
- $0 \leq M \leq 10^5$
- $1 \leq X,Y \leq N$
- $X \neq Y$
- $1 \leq A_i,B_i \leq N$
- $A_i \neq B_i$
- $1 \leq T_i \leq 10^9$
- $1 \leq K_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $X$ $Y$
> 
> $A_1$ $B_1$ $T_1$ $K_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $T_M$ $K_M$

## Output

Print the earliest possible time you can reach City $Y$. If City $Y$ is unreachable, print `-1` instead.

```input1
3 2 1 3
1 2 2 3
2 3 3 4
```

```output1
7
```

First, you take Railroad $1$ at time $0$ and go from City $1$ to City $2$. You arrive at City $2$ at time $2$.

Then, you take Railroad $2$ at time $4$ and go from City $2$ to City $3$. You arrive at City $3$ at time $7$.

There is no way to reach City $3$ earlier.

```input2
3 2 3 1
1 2 2 3
2 3 3 4
```

```output2
5
```

First, you take Railroad $2$ at time $0$ and go from City $3$ to City $2$. You arrive at City $2$ at time $3$.

Then, you take Railroad $1$ at time $3$ and go from City $2$ to City $1$. You arrive at City $1$ at time $5$.

```input3
3 0 3 1
```

```output3
-1
```

```input4
9 14 6 7
3 1 4 1
5 9 2 6
5 3 5 8
9 7 9 3
2 3 8 4
6 2 6 4
3 8 3 2
7 9 5 2
8 4 1 9
7 1 6 9
3 9 9 3
7 5 1 5
8 2 9 7
4 9 4 4
```

```output4
26
```