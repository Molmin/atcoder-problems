Score : $500$ points

## Problem Statement

There are $N$ infants registered in AtCoder, numbered $1$ to $N$, and $2\times 10^5$ kindergartens, numbered $1$ to $2\times 10^5$.
Infant $i$ has a rating of $A_i$ and initially belongs to Kindergarten $B_i$.

From now on, $Q$ transfers will happen.
After the $j$-th transfer, Infant $C_j$ will belong to Kindergarten $D_j$.

Here, we define the *evenness* as follows. For each kindergarten with one or more infants registered in AtCoder, let us find the highest rating of an infant in the kindergarten. The evenness is then defined as the lowest among those ratings.

For each of the $Q$ transfers, find the evenness just after the transfer.

## Constraints

- $1 \leq N,Q \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq C_j \leq N$
- $1 \leq B_i,D_j \leq 2 \times 10^5$
- All values in input are integers.
- In the $j$-th transfer, Infant $C_j$ changes the kindergarten it belongs to.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $:$
> 
> $A_N$ $B_N$
> 
> $C_1$ $D_1$
> 
> $C_2$ $D_2$
> 
> $:$
> 
> $C_Q$ $D_Q$

## Output

Print $Q$ lines.
The $j$-th line should contain the evenness just after the $j$-th transfer.

```input1
6 3
8 1
6 2
9 3
1 1
2 2
1 3
4 3
2 1
1 2
```

```output1
6
2
6
```

Initially, Infant $1, 4$ belongs to Kindergarten $1$, Infant $2, 5$ belongs to Kindergarten $2$, and Infant $3, 6$ belongs to Kindergarten $3$.

After the $1$-st transfer that makes Infant $4$ belong to Kindergarten $3$, Infant $1$ belongs to Kindergarten $1$, Infant $2, 5$ belong to Kindergarten $2$, and Infant $3, 4, 6$ belong to Kindergarten $3$. The highest ratings of an infant in Kindergarten $1, 2, 3$ are $8, 6, 9$, respectively. The lowest among them is $6$, so the $1$-st line in the output should contain $6$.

After the $2$-nd transfer that makes Infant $2$ belong to Kindergarten $1$, Infant $1, 2$ belong to Kindergarten $1$, Infant $5$ belongs to Kindergarten $2$, and Infant $3, 4, 6$ belong to Kindergarten $3$. The highest ratings of an infant in Kindergarten $1, 2, 3$ are $8, 2, 9$, respectively. The lowest among them is $2$, so the $2$-nd line in the output should contain $2$.

After the $3$-rd transfer that makes Infant $1$ belong to Kindergarten $2$, Infant $2$ belongs to Kindergarten $1$, Infant $1, 5$ belong to Kindergarten $2$, and Infant $3, 4, 6$ belong to Kindergarten $3$. The highest ratings of an infant in Kindergarten $1, 2, 3$ are $6, 8, 9$, respectively. The lowest among them is $6$, so the $3$-rd line in the output should contain $6$.

```input2
2 2
4208 1234
3056 5678
1 2020
2 2020
```

```output2
3056
4208
```