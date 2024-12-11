Score : $1000$ points

## Problem Statement

There are $N$ barbecue restaurants along a street.
The restaurants are numbered $1$ through $N$ from west to east, and the distance between restaurant $i$ and restaurant $i+1$ is $A_i$.

Joisino has $M$ tickets, numbered $1$ through $M$.
Every barbecue restaurant offers barbecue meals in exchange for these tickets.
Restaurant $i$ offers a meal of *deliciousness* $B_{i,j}$ in exchange for ticket $j$.
Each ticket can only be used once, but any number of tickets can be used at a restaurant.

Joisino wants to have $M$ barbecue meals by starting from a restaurant of her choice, then repeatedly traveling to another barbecue restaurant and using unused tickets at the restaurant at her current location.
Her eventual *happiness* is calculated by the following formula: "(The total deliciousness of the meals eaten) - (The total distance traveled)".
Find her maximum possible eventual happiness.

## Constraints

- All input values are integers.
- $2 \leq N \leq 5 \times 10^3$
- $1 \leq M \leq 200$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_{i,j} \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $...$ $A_{N-1}$
> 
> $B_{1,1}$ $B_{1,2}$ $...$ $B_{1,M}$
> 
> $B_{2,1}$ $B_{2,2}$ $...$ $B_{2,M}$
> 
> $:$
> 
> $B_{N,1}$ $B_{N,2}$ $...$ $B_{N,M}$

## Output

Print Joisino's maximum possible eventual happiness.

```input1
3 4
1 4
2 2 5 1
1 3 3 2
2 2 5 1
```

```output1
11
```

The eventual happiness can be maximized by the following strategy: start from restaurant $1$ and use tickets $1$ and $3$, then move to restaurant $2$ and use tickets $2$ and $4$.

```input2
5 3
1 2 3 4
10 1 1
1 1 1
1 10 1
1 1 1
1 1 10
```

```output2
20
```