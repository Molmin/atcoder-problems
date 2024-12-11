Score: $300$ points

## Problem Statement

In Japan, there are six types of coins in circulation: $1$ yen, $5$ yen, $10$ yen, $50$ yen, $100$ yen, and $500$ yen. Answer the following question regarding these coins.

Mr. AtCoder's wallet contains $A$ $1$-yen coins, $B$ $5$-yen coins, $C$ $10$-yen coins, $D$ $50$-yen coins, $E$ $100$-yen coins, and $F$ $500$-yen coins.

He is planning to shop at $N$ stores in sequence.
Specifically, at the $i$-th store $(1 \leq i \leq N)$, he plans to buy one item that costs $X_i$ yen (including tax).

Giving and receiving change takes time, so he wants to choose his coins so that he can pay the **exact amount** at each store.
Determine if this is possible.

## Constraints

- $0 \leq A \leq 200$
- $0 \leq B \leq 200$
- $0 \leq C \leq 200$
- $0 \leq D \leq 200$
- $0 \leq E \leq 200$
- $0 \leq F \leq 200$
- $1 \leq N \leq 10$
- $1 \leq X_i \leq 10000 \ (1 \leq i \leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$ $E$ $F$
> 
> $N$
> 
> $X_1$ $X_2$ $\cdots$ $X_N$

## Output

Print `Yes` if the objective is achievable, and `No` otherwise.

```input1
0 0 6 3 4 1
3
700 250 160
```

```output1
Yes
```

For example, he can make exact payments at all three stores as follows:

- At the first store: Use two $100$-yen coins and one $500$-yen coin.
- At the second store: Use five $10$-yen coins and two $100$-yen coins.
- At the third store: Use one $10$-yen coin and three $50$-yen coins.

```input2
0 0 0 2 4 0
3
100 200 300
```

```output2
No
```

The total amount in the wallet is $500$ yen, but a total payment of $100+200+300=600$ yen is required, so it is impossible to purchase all the items.

```input3
0 0 0 0 8 8
1
250
```

```output3
No
```

There are no $50$-yen or smaller coins in the wallet, so it is impossible to pay exactly $250$ yen.

```input4
20 5 9 7 10 6
5
177 177 177 177 177
```

```output4
Yes
```

```input5
17 5 9 7 10 6
5
177 177 177 177 177
```

```output5
No
```