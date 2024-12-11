Score : $150$ points

## Problem Statement

Takahashi is health-conscious and concerned about whether he is getting enough of $M$ types of nutrients from his diet.

For the $i$-th nutrient, his goal is to take at least $A_i$ units per day.

Today, he ate $N$ foods, and from the $i$-th food, he took $X_{i,j}$ units of nutrient $j$.

Determine whether he has met the goal for all $M$ types of nutrients.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq M \leq 100$
- $0 \leq A_i, X_{i,j} \leq 10^7$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $\ldots$ $A_M$
> 
> $X_{1,1}$ $\ldots$ $X_{1,M}$
> 
> $\vdots$
> 
> $X_{N,1}$ $\ldots$ $X_{N,M}$

## Output

Print `Yes` if the goal is met for all $M$ types of nutrients, and `No` otherwise.

```input1
2 3
10 20 30
20 0 10
0 100 100
```

```output1
Yes
```

For nutrient $1$, Takahashi took $20$ units from the $1$-st food and $0$ units from the $2$-nd food, totaling $20$ units, thus meeting the goal of taking at least $10$ units.<br>
Similarly, he meets the goal for nutrients $2$ and $3$.

```input2
2 4
10 20 30 40
20 0 10 30
0 100 100 0
```

```output2
No
```

The goal is not met for nutrient $4$.