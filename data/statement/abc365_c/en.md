Score : $300$ points

## Problem Statement

There are $N$ people participating in an event, and the transportation cost for the $i$-th person is $A_i$ yen.

Takahashi, the organizer of the event, decided to set a maximum limit $x$ for the transportation subsidy. The subsidy for person $i$ will be $\min(x, A_i)$ yen. Here, $x$ must be a non-negative integer.

Given that Takahashi's budget is $M$ yen, and he wants the total transportation subsidy for all $N$ people to be at most $M$ yen, what is the maximum possible value of the subsidy limit $x$?

If the subsidy limit can be made infinitely large, report that instead.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^{14}$
- $1 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_{N}$

## Output

Print the maximum value of the subsidy limit $x$ that satisfies the budget condition, as an integer.

If the subsidy limit can be made infinitely large, print `infinite` instead.

```input1
4 8
1 3 2 4
```

```output1
2
```

If the subsidy limit is set to $2$ yen, the total transportation subsidy for all $N$ people is $\min(2,1) + \min(2,3) + \min(2,2) + \min(2,4) = 7$ yen, which is within the budget of $8$ yen.

If the subsidy limit is set to $3$ yen, the total transportation subsidy for all $N$ people is $\min(3,1) + \min(3,3) + \min(3,2) + \min(3,4) = 9$ yen, which exceeds the budget of $8$ yen.

Therefore, the maximum possible value of the subsidy limit is $2$ yen.

```input2
3 20
5 3 2
```

```output2
infinite
```

The subsidy limit can be made infinitely large.

```input3
10 23
2 5 6 5 2 1 7 9 7 2
```

```output3
2
```