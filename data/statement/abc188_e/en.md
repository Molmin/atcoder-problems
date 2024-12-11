Score : $500$ points

## Problem Statement

In Takahashi Kingdom, there are $N$ towns, called Town $1$ through Town $N$.<br>
There are also $M$ roads in the kingdom, called Road $1$ through Road $M$. By traversing Road $i$, you can travel from Town $X_i$ to Town $Y_i$, but not vice versa. Here, it is guaranteed that $X_i &lt; Y_i$.<br>
Gold is actively traded in this kingdom. At Town $i$, you can buy or sell $1$ kilogram of gold for $A_i$ yen (the currency of Japan).

Takahashi, a traveling salesman, plans to buy $1$ kilogram of gold at some town, traverse one or more roads, and sell $1$ kilogram of gold at another town.<br>
Find the maximum possible profit (that is, the selling price minus the buying price) in this plan.

## Constraints

- $2 \le N \le 2 \times 10^5$
- $1 \le M \le 2 \times 10^5$
- $1 \le A_i \le 10^9$
- $1 \le X_i \lt Y_i \le N$
- $(X_i, Y_i) \neq (X_j, Y_j) (i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $X_3$ $Y_3$
> 
> $\hspace{15pt} \vdots$
> 
> $X_M$ $Y_M$

## Output

Print the answer.

```input1
4 3
2 3 1 5
2 4
1 2
1 3
```

```output1
3
```

We can achieve the profit of $3$ yen, as follows:

- At Town $1$, buy one kilogram of gold for $2$ yen.
- Traverse Road $2$ to get to Town $2$.
- Traverse Road $1$ to get to Town $4$.
- At Town $4$, sell one kilogram of gold for $5$ yen.

```input2
5 5
13 8 3 15 18
2 4
1 2
4 5
2 3
1 3
```

```output2
10
```

We can achieve the profit of $10$ yen, as follows:

- At Town $2$, buy one kilogram of gold for $8$ yen.
- Traverse Road $1$ to get to Town $4$.
- Traverse Road $3$ to get to Town $5$.
- At Town $5$, sell one kilogram of gold for $18$ yen.

```input3
3 1
1 100 1
2 3
```

```output3
-99
```

Note that we cannot sell gold at the town where we bought the gold, which means the answer may be negative.