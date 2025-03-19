Score : $450$ points

## Problem Statement

There are $N$ foods, each containing exactly one of vitamins $1$, $2$, and $3$.<br>
Specifically, eating the $i$-th food gives you $A_i$ units of vitamin $V_i$, and $C_i$ calories.

Takahashi can choose any subset of these $N$ foods as long as the total calorie consumption does not exceed $X$.<br>
Find the maximum possible value of this: the minimum intake among vitamins $1$, $2$, and $3$.

## Constraints

- $1 \leq N \leq 5000$
- $1 \leq X \leq 5000$
- $1 \leq V_i \leq 3$
- $1 \leq A_i \leq 2 \times 10^5$
- $1 \leq C_i \leq X$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $V_1$ $A_1$ $C_1$
> 
> $V_2$ $A_2$ $C_2$
> 
> $\vdots$
> 
> $V_N$ $A_N$ $C_N$

## Output

Print the maximum possible value of "the minimum intake among vitamins $1$, $2$, and $3$" when the total calories consumed is at most $X$.

```input1
5 25
1 8 5
2 3 5
2 7 10
3 2 5
3 3 10
```

```output1
3
```

Each food provides the following if eaten:

- 1st food: $8$ units of vitamin $1$, and $5$ calories
- 2nd food: $3$ units of vitamin $2$, and $5$ calories
- 3rd food: $7$ units of vitamin $2$, and $10$ calories
- 4th food: $2$ units of vitamin $3$, and $5$ calories
- 5th food: $3$ units of vitamin $3$, and $10$ calories

Eating the 1st, 2nd, 4th, and 5th foods gives $8$ units of vitamin $1$, $3$ units of vitamin $2$, $5$ units of vitamin $3$, and $25$ calories.<br>
In this case, the minimum among the three vitamin intakes is $3$ (vitamin $2$).

It is impossible to get $4$ or more units of each vitamin without exceeding $25$ calories, so the answer is $3$.

```input2
2 5000
1 200000 1
2 200000 1
```

```output2
0
```