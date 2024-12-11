Score : $300$ points

## Problem Statement

Joisino is planning to open a shop in a shopping street.

Each of the five weekdays is divided into two periods, the morning and the evening. For each of those ten periods, a shop must be either open during the whole period, or closed during the whole period. Naturally, a shop must be open during at least one of those periods.

There are already $N$ stores in the street, numbered $1$ through $N$.

You are given information of the business hours of those shops, $F_{i,j,k}$. If $F_{i,j,k}=1$, Shop $i$ is open during Period $k$ on Day $j$ (this notation is explained below); if $F_{i,j,k}=0$, Shop $i$ is closed during that period. Here, the days of the week are denoted as follows. Monday: Day $1$, Tuesday: Day $2$, Wednesday: Day $3$, Thursday: Day $4$, Friday: Day $5$. Also, the morning is denoted as Period $1$, and the afternoon is denoted as Period $2$.

Let $c_i$ be the number of periods during which both Shop $i$ and Joisino's shop are open. Then, the profit of Joisino's shop will be $P_{1,c_1}+P_{2,c_2}+...+P_{N,c_N}$.

Find the maximum possible profit of Joisino's shop when she decides whether her shop is open during each period, making sure that it is open during at least one period.

## Constraints

- $1 \leq N \leq 100$
- $0 \leq F_{i,j,k} \leq 1$
- For every integer $i$ such that $1 \leq i \leq N$, there exists at least one pair $(j,k)$ such that $F_{i,j,k}=1$.
- $-10^7 \leq P_{i,j} \leq 10^7$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $F_{1,1,1}$ $F_{1,1,2}$ $...$ $F_{1,5,1}$ $F_{1,5,2}$
> 
> $:$
> 
> $F_{N,1,1}$ $F_{N,1,2}$ $...$ $F_{N,5,1}$ $F_{N,5,2}$
> 
> $P_{1,0}$ $...$ $P_{1,10}$
> 
> $:$
> 
> $P_{N,0}$ $...$ $P_{N,10}$

## Output

Print the maximum possible profit of Joisino's shop.

```input1
1
1 1 0 1 0 0 0 1 0 1
3 4 5 6 7 8 9 -2 -3 4 -2
```

```output1
8
```

If her shop is open only during the periods when Shop $1$ is opened, the profit will be $8$, which is the maximum possible profit.

```input2
2
1 1 1 1 1 0 0 0 0 0
0 0 0 0 0 1 1 1 1 1
0 -2 -2 -2 -2 -2 -1 -1 -1 -1 -1
0 -2 -2 -2 -2 -2 -1 -1 -1 -1 -1
```

```output2
-2
```

Note that a shop must be open during at least one period, and the profit may be negative.

```input3
3
1 1 1 1 1 1 0 0 1 1
0 1 0 1 1 1 1 0 1 0
1 0 1 1 0 1 0 1 0 1
-8 6 -2 -8 -8 4 8 7 -6 2 2
-9 2 0 1 7 -5 0 -2 -6 5 5
6 -6 7 -9 6 -5 8 0 -9 -7 -7
```

```output3
23
```