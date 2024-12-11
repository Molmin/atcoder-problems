Score : $600$ points

## Problem Statement

There is a building with $2N$ floors, numbered $1, 2, \ldots, 2N$ from bottom to top.

The elevator in this building moved from Floor $1$ to Floor $2N$ just once.

On the way, $N$ persons got on and off the elevator. Each person $i$ $(1 \leq i \leq N)$ got on at Floor $A_i$ and off at Floor $B_i$. Here, $1 \leq A_i &lt; B_i \leq 2N$, and just one person got on or off at each floor.

Additionally, because of their difficult personalities, the following condition was satisfied:

- Let $C_i (= B_i - A_i - 1)$ be the number of times, while Person $i$ were on the elevator, other persons got on or off. Then, the following holds:-   - If there was a moment when both Person $i$ and Person $j$ were on the elevator, $C_i = C_j$.

We recorded the sequences $A$ and $B$, but unfortunately, we have lost some of the records. If the record of $A_i$ or $B_i$ is lost, it will be given to you as $-1$.

Additionally, the remaining records may be incorrect.

Determine whether there is a pair of $A$ and $B$ that is consistent with the remaining records.

## Constraints

- $1 \leq N \leq 100$
- $A_i = -1$ or $1 \leq A_i \leq 2N$.
- $B_i = -1$ or $1 \leq B_i \leq 2N$.
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

If there is a pair of $A$ and $B$ that is consistent with the remaining records, print `Yes`; otherwise, print `No`.

```input1
3
1 -1
-1 4
-1 6
```

```output1
Yes
```

For example, if $B_1 = 3, A_2 = 2$, and $A_3 = 5$, all the requirements are met.

In this case, there is a moment when both Person $1$ and Person $2$ were on the elevator, which is fine since $C_1 = C_2 = 1$.

```input2
2
1 4
2 3
```

```output2
No
```

There is a moment when both Person $1$ and Person $2$ were on the elevator. Since $C_1 = 2, C_2 = 0$, some of the information is incorrect.

```input3
2
4 1
2 4
```

```output3
No
```

The records are seemingly intact but clearly are incorrect.