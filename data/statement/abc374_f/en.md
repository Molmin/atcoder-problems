Score : $550$ points

## Problem Statement

KEYENCE is famous for quick delivery.

In this problem, the calendar proceeds as Day $1$, Day $2$, Day $3$, $\dots$.

There are orders $1,2,\dots,N$, and it is known that order $i$ will be placed on Day $T_i$.<br>
For these orders, shipping is carried out according to the following rules.

- At most $K$ orders can be shipped together.
- Order $i$ can only be shipped on Day $T_i$ or later.
- Once a shipment is made, the next shipment cannot be made until $X$ days later.-   - That is, if a shipment is made on Day $a$, the next shipment can be made on Day $a+X$.

For each day that passes from order placement to shipping, dissatisfaction accumulates by $1$ per day.<br>
That is, if order $i$ is shipped on Day $S_i$, the dissatisfaction accumulated for that order is $(S_i - T_i)$.

Find the minimum possible total dissatisfaction accumulated over all orders when you optimally schedule the shipping dates.

## Constraints

- All input values are integers.
- $1 \le K \le N \le 100$
- $1 \le X \le 10^9$
- $1 \le T_1 \le T_2 \le \dots \le T_N \le 10^{12}$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$ $X$
> 
> $T_1$ $T_2$ $\dots$ $T_N$

## Output

Print the answer as an integer.

```input1
5 2 3
1 5 6 10 12
```

```output1
2
```

For example, by scheduling shipments as follows, we can achieve a total dissatisfaction of $2$, which is the minimum possible.

- Ship order $1$ on Day $1$.-   - This results in dissatisfaction of $(1-1) = 0$, and the next shipment can be made on Day $4$.
- Ship orders $2$ and $3$ on Day $6$.-   - This results in dissatisfaction of $(6-5) + (6-6) = 1$, and the next shipment can be made on Day $9$.
- Ship order $4$ on Day $10$.-   - This results in dissatisfaction of $(10-10) = 0$, and the next shipment can be made on Day $13$.
- Ship order $5$ on Day $13$.-   - This results in dissatisfaction of $(13-12) = 1$, and the next shipment can be made on Day $16$.

```input2
1 1 1000000000
1000000000000
```

```output2
0
```

```input3
15 4 5
1 3 3 6 6 6 10 10 10 10 15 15 15 15 15
```

```output3
35
```