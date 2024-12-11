Score : $400$ points

## Problem Statement

There are $N$ towns located in a line, conveniently numbered $1$ through $N$. Takahashi the merchant is going on a travel from town $1$ to town $N$, buying and selling apples.

Takahashi will begin the travel at town $1$, with no apple in his possession. The actions that can be performed during the travel are as follows:

- *Move*: When at town $i$ ($i &lt; N$), move to town $i + 1$.
- *Merchandise*: Buy or sell an arbitrary number of apples at the current town. Here, it is assumed that one apple can always be bought and sold for $A_i$ yen (the currency of Japan) at town $i$ ($1 \leq i \leq N$), where $A_i$ are distinct integers. Also, you can assume that he has an infinite supply of money.

For some reason, there is a constraint on merchandising apple during the travel: the sum of the number of apples bought and the number of apples sold during the whole travel, must be at most $T$. (Note that a single apple can be counted in both.)

During the travel, Takahashi will perform actions so that the *profit* of the travel is maximized. Here, the profit of the travel is the amount of money that is gained by selling apples, minus the amount of money that is spent on buying apples. Note that we are not interested in apples in his possession at the end of the travel.

Aoki, a business rival of Takahashi, wants to trouble Takahashi by manipulating the market price of apples. Prior to the beginning of Takahashi's travel, Aoki can change $A_i$ into another arbitrary non-negative integer $A_i'$ for any town $i$, any number of times. The cost of performing this operation is $|A_i - A_i'|$. After performing this operation, different towns may have equal values of $A_i$.

Aoki's objective is to decrease Takahashi's expected profit by at least $1$ yen. Find the minimum total cost to achieve it. You may assume that Takahashi's expected profit is initially at least $1$ yen.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$ ($1 \leq i \leq N$)
- $A_i$ are distinct.
- $2 \leq T \leq 10^9$
- In the initial state, Takahashi's expected profit is at least $1$ yen.

## Input

The input is given from Standard Input in the following format:

> $N$ $T$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the minimum total cost to decrease Takahashi's expected profit by at least $1$ yen.

```input1
3 2
100 50 200
```

```output1
1
```

In the initial state, Takahashi can achieve the maximum profit of $150$ yen as follows:

1. Move from town $1$ to town $2$.
2. Buy one apple for $50$ yen at town $2$.
3. Move from town $2$ to town $3$.
4. Sell one apple for $200$ yen at town $3$.

If, for example, Aoki changes the price of an apple at town $2$ from $50$ yen to $51$ yen, Takahashi will not be able to achieve the profit of $150$ yen. The cost of performing this operation is $1$, thus the answer is $1$.

There are other ways to decrease Takahashi's expected profit, such as changing the price of an apple at town $3$ from $200$ yen to $199$ yen.

```input2
5 8
50 30 40 10 20
```

```output2
2
```

```input3
10 100
7 10 4 5 9 3 6 8 2 1
```

```output3
2
```