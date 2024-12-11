Score : $600$ points

## Problem Statement

You are going to trade stocks of Company X for the next $N$ days.

As a precognitive, you know that the stock price on the $i$-th day of trading will be $P_i$ yen (the currency in Japan) per unit.

Every day, you can choose to do exactly one of the following.

- Buy one unit of stock for $P_i$ yen.-   - You will obtain one unit of stock and your money will decrease by $P_i$ yen.
- Sell one unit of stock for $P_i$ yen.-   - You will lose one unit of stock and your money will increase by $P_i$ yen.
- Do nothing.

You initially have $10^{100}$ yen, so you will never be short of money.

Find the maximum possible amount of money you will have gained when the $N$-th day has ended.<br>
Even if you still possess some amount of stocks of Company X when the $N$-th day has ended, it is considered that they are worth $0$ yen.

## Constraints

- All values in input are integers.
- $1 \le N \le 2 \times 10^5$
- $1 \le P_i \le 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print the answer as an integer.

```input1
8
2 5 4 3 7 1 8 6
```

```output1
16
```

By acting as follows, your money will increase by $16$ yen, which is the maximum possible.

- On the $1$-th day, you buy $1$ unit of stock.  You now have $1$ unit of stock, and your money has increased by $-2$ yen so far.
- On the $2$-nd day, you sell $1$ unit of stock.  You now have $0$ units of stocks, and your money has increased by $3$ yen so far.
- On the $3$-rd day, you buy $1$ unit of stock.  You now have $1$ unit of stock, and your money has increased by $-1$ yen so far.
- On the $4$-th day, you buy $1$ unit of stock.  You now have $2$ units of stocks, and your money has increased by $-4$ yen so far.
- On the $5$-th day, you sell $1$ unit of stock.  You now have $1$ unit of stock, and your money has increased by $3$ yen so far.
- On the $6$-th day, you buy $1$ unit of stock.  You now have $2$ units of stocks, and your money has increased by $2$ yen so far.
- On the $7$-th day, you sell $1$ unit of stock.  You now have $1$ unit of stock, and your money has increased by $10$ yen so far.
- On the $8$-th day, you sell $1$ unit of stock.  You now have $0$ units of stocks, and your money has increased by $16$ yen so far.

```input2
5
10000 1000 100 10 1
```

```output2
0
```

```input3
15
300 1 4000 1 50000 900000000 20 600000 50000 300 50000 80000000 900000000 7000000 900000000
```

```output3
2787595378
```