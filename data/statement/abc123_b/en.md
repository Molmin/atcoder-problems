Score: $200$ points

## Problem Statement

The restaurant AtCoder serves the following five dishes:

- ABC Don (rice bowl): takes $A$ minutes to serve.
- ARC Curry: takes $B$ minutes to serve.
- AGC Pasta: takes $C$ minutes to serve.
- APC Ramen: takes $D$ minutes to serve.
- ATC Hanbagu (hamburger patty): takes $E$ minutes to serve.

Here, the time to serve a dish is the time between when an order is placed and when the dish is delivered.

This restaurant has the following rules on orders:

- An order can only be placed at a time that is a multiple of $10$ (time $0$, $10$, $20$, $...$).
- Only one dish can be ordered at a time.
- No new order can be placed when an order is already placed and the dish is still not delivered, but a new order can be placed at the exact time when the dish is delivered.

E869120 arrives at this restaurant at time $0$. He will order all five dishes. Find the earliest possible time for the last dish to be delivered.<br>
Here, he can order the dishes in any order he likes, and he can place an order already at time $0$.

## Constraints

- $A, B, C, D$ and $E$ are integers between $1$ and $123$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $A$
> 
> $B$
> 
> $C$
> 
> $D$
> 
> $E$

## Output

Print the earliest possible time for the last dish to be delivered, as an integer.

```input1
29
20
7
35
120
```

```output1
215
```

If we decide to order the dishes in the order ABC Don, ARC Curry, AGC Pasta, ATC Hanbagu, APC Ramen, the earliest possible time for each order is as follows:

- Order ABC Don at time $0$, which will be delivered at time $29$.
- Order ARC Curry at time $30$, which will be delivered at time $50$.
- Order AGC Pasta at time $50$, which will be delivered at time $57$.
- Order ATC Hanbagu at time $60$, which will be delivered at time $180$.
- Order APC Ramen at time $180$, which will be delivered at time $215$.

There is no way to order the dishes in which the last dish will be delivered earlier than this.

```input2
101
86
119
108
57
```

```output2
481
```

If we decide to order the dishes in the order AGC Pasta, ARC Curry, ATC Hanbagu, APC Ramen, ABC Don, the earliest possible time for each order is as follows:

- Order AGC Pasta at time $0$, which will be delivered at time $119$.
- Order ARC Curry at time $120$, which will be delivered at time $206$.
- Order ATC Hanbagu at time $210$, which will be delivered at time $267$.
- Order APC Ramen at time $270$, which will be delivered at time $378$.
- Order ABC Don at time $380$, which will be delivered at time $481$.

There is no way to order the dishes in which the last dish will be delivered earlier than this.

```input3
123
123
123
123
123
```

```output3
643
```

This is the largest valid case.