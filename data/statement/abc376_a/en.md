Score : $150$ points

## Problem Statement

There is a mysterious button.
When you press this button, you receive one candy, unless less than $C$ seconds have elapsed since you last received a candy.

Takahashi decided to press this button $N$ times.
He will press the button for the $i$-th time $T_i$ seconds from now.

How many candies will he receive?

## Constraints

- $1 \leq N \leq 100$
- $1 \leq C \leq 1000$
- $0 \leq T_1 &lt; T_2 &lt; \dots &lt; T_N \leq 1000$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $C$
> 
> $T_1$ $T_2$ $\dots$ $T_N$

## Output

Print the number of candies that Takahashi will receive.

```input1
6 5
1 3 7 8 10 12
```

```output1
3
```

Takahashi will press the button six times.

- 1st press ($1$ second from now): You always receive a candy when pressing the button for the first time.
- 2nd press ($3$ seconds from now): $3 - 1 = 2 &lt; C$ seconds have elapsed since he last received a candy, so he does not receive a candy.
- 3rd press ($7$ seconds from now): $7 - 1 = 6 \geq C$ seconds have elapsed since he last received a candy, so he receives a candy.
- 4th press ($8$ seconds from now): $8 - 7 = 1 &lt; C$ second has elapsed since he last received a candy, so he does not receive a candy.
- 5th press ($10$ seconds from now): $10 - 7 = 3 &lt; C$ seconds have elapsed since he last received a candy, so he does not receive a candy.
- 6th press ($12$ seconds from now): $12 - 7 = 5 \geq C$ seconds have elapsed since he last received a candy, so he receives a candy.

Therefore, he receives three candies.

```input2
3 2
0 2 4
```

```output2
3
```

```input3
10 3
0 3 4 6 9 12 15 17 19 20
```

```output3
7
```