Score : $400$ points

## Problem Statement

Takahashi will toss a coin $N$ times.
He also has a counter, which initially shows $0$.

Depending on the result of the $i$-th coin toss, the following happens:

- If it heads: Takahashi increases the counter's value by $1$ and receives $X_i$ yen (Japanese currency).
- If it tails: he resets the counter's value to $0$, without receiving money.

Additionally, there are $M$ kinds of streak bonuses. The $i$-th kind of streak bonus awards $Y_i$ yen **each time** the counter shows $C_i$.

Find the maximum amount of money that Takahashi can receive.

## Constraints

- $1\leq M\leq N\leq 5000$
- $1\leq X_i\leq 10^9$
- $1\leq C_i\leq N$
- $1\leq Y_i\leq 10^9$
- $C_1,C_2,\ldots,C_M$ are all different.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $X_2$ $\ldots$ $X_N$
> 
> $C_1$ $Y_1$
> 
> $C_2$ $Y_2$
> 
> $\vdots$
> 
> $C_M$ $Y_M$

## Output

Print the maximum amount of money that Takahashi can receive, as an integer.

```input1
6 3
2 7 1 8 2 8
2 10
3 1
5 5
```

```output1
48
```

If he gets head, head, tail, head, head, head, in this order, the following amounts of money are awarded.

- In the $1$-st coin toss, the coin heads. Change the counter's value from $0$ to $1$ and receive $2$ yen.
- In the $2$-nd coin toss, the coin heads. Change the counter's value from $1$ to $2$ and receive $7$ yen. Additionally, get $10$ yen as a streak bonus.
- In the $3$-rd coin toss, the coin tails. Change the counter's value from $2$ to $0$.
- In the $4$-th coin toss, the coin heads. Change the counter's value from $0$ to $1$ and receive $8$ yen.
- In the $5$-th coin toss, the coin heads. Change the counter's value from $1$ to $2$ and receive $2$ yen. Additionally, get $10$ yen as a streak bonus.
- In the $6$-th coin toss, the coin heads. Change the counter's value from $2$ to $3$ and receive $8$ yen. Additionally, get $1$ yen as a streak bonus.

In this case, Takahashi receives $2+(7+10)+0+8+(2+10)+(8+1)=48$ yen in total, which is the maximum possible.<br>
Note that streak bonuses are awarded any number of times each time the counter shows $C_i$.<br>
As a side note, if he gets head in all $6$ coin tosses, he only receives $2+(7+10)+(1+1)+8+(2+5)+8=44$ yen, which is not the maximum.

```input2
3 2
1000000000 1000000000 1000000000
1 1000000000
3 1000000000
```

```output2
5000000000
```

Note that the answer may not fit into a $32$-bit integer type.