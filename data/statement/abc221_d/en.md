Score : $400$ points

## Problem Statement

There is an online game with $N$ registered players.<br>
Today, which is the $10^{100}$-th day since its launch, the developer Takahashi examined the users' login history. It turned out that the $i$-th player logged in for $B_i$ consecutive days from Day $A_i$, where Day $1$ is the launch day, and did not log in for the other days.
In other words, the $i$-th player logged in on Day $A_i$, $A_i+1$, $\ldots$, $A_i+B_i-1$, and only on those days.<br>
For each integer $k$ such that $1\leq k\leq N$, find the number of days on which exactly $k$ players logged in.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $:$
> 
> $A_N$ $B_N$

## Output

Print $N$ integers with spaces in between, as follows:

> $D_1$ $D_2$ $\cdots$ $D_N$

Here, $D_i$ denotes the number of days on which exactly $k$ players logged in.

```input1
3
1 2
2 3
3 1
```

```output1
2 2 0
```

The first player logged in on Day $1$, $2$, the second player logged in on Day $2$, $3$, $4$, and the third player logged in on Day $3$ only.

Thus, we can see that Day $1$, $4$ had $1$ player logged in, Day $2$, $3$ had $2$ players logged in, and the other days had no players logged in.

The answer is: there were $2$ days with exactly $1$ player logged in, $2$ days with exactly $2$ players logged in, and $0$ days with exactly $3$ players logged in.

```input2
2
1000000000 1000000000
1000000000 1000000000
```

```output2
0 1000000000
```

There may be two or more players who logged in during the same period.