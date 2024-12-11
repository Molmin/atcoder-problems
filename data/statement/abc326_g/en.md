Score : $625$ points

## Problem Statement

There are $N$ skills numbered $1$ to $N$ and $M$ achievements numbered $1$ to $M$.

Each skill has a positive integer level, and the initial level of every skill is $1$.

You can pay a cost of $C_i$ yen to increase the level of skill $i$ by $1$. You can do this as many times as you want.

Achievement $i$ is achieved when the following condition is satisfied for every $j=1,\ldots,N$, for which you will receive a reward of $A_i$ yen.

- Condition: The level of skill $j$ is at least $L_{i,j}$.

Find the maximum possible total reward obtained minus the total cost required when appropriately choosing how to raise the skill levels.

## Constraints

- $1 \leq N,M \leq 50$
- $1 \leq L_{i,j} \leq 5$
- $1 \leq A_i,C_i \leq 10^6$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $C_1$ $\ldots$ $C_N$
> 
> $A_1$ $\ldots$ $A_M$
> 
> $L_{1,1}$ $\ldots$ $L_{1,N}$
> 
> $\vdots$
> 
> $L_{M,1}$ $\ldots$ $L_{M,N}$

## Output

Print the answer as an integer.  

```input1
2 2
10 20
100 50
3 1
1 4
```

```output1
80
```

There are two skills. It costs $10$ yen to raise the level of skill $1$ and $20$ yen to raise the level of skill $2$.<br>
There are two achievements.
Achievement $1$ is achieved when skill $1$ is at least level $3$ and skill $2$ is at least level $1$, for which you will receive $100$ yen.
Achievement $2$ is achieved when skill $1$ is at least $1$ and skill $2$ is at least level $4$, for which you will receive $50$ yen.

By raising skill $1$ to level $3$ and skill $2$ to level $1$, you will receive the reward of $100$ yen for the cost of $20$ yen, and the balance is $80$ yen.

```input2
2 2
10 20
100 50
3 2
1 4
```

```output2
70
```

By raising skill $1$ to level $3$ and skill $2$ to level $4$, you will receive the reward of $150$ yen for the cost of $80$ yen, and the balance is $70$ yen.

```input3
10 10
10922 23173 32300 22555 29525 16786 3135 17046 11245 20310
177874 168698 202247 31339 10336 14825 56835 6497 12440 110702
2 1 4 1 3 4 4 5 1 4
2 3 4 4 5 3 5 5 2 3
2 3 5 1 4 2 2 2 2 5
3 5 5 3 5 2 2 1 5 4
3 1 1 4 4 1 1 5 3 1
1 2 3 2 4 2 4 3 3 1
4 4 4 2 5 1 4 2 2 2
5 3 1 2 3 4 2 5 2 2
5 4 3 4 3 1 5 1 5 4
2 3 2 5 2 3 1 2 2 4
```

```output3
66900
```