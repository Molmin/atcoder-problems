Score : $900$ points

## Problem Statement

Mr. AtCoder made a round chocolate cake for his $2N$ friends. It is radially cut from the center into $2N$ equal pieces, numbered $0$ through $2N-1$ in clockwise order.

To give the final touches, he is going to put strawberries on each piece. He has heard what his friends want about it. The friends are numbered $0$ through $2N-1$, and Friend $i$ $(0 \leq i \leq 2N-1)$ wants the following:

- Piece $i, i+1, \dots, i+N-1$ have a total of at least $A_i$ strawberries on them (for $x \geq 2N$, consider Piece $x$ as Piece $x-2N$).

To fulfill the requests of all his friends, at least how many strawberries should be put on the whole cake?

## Constraints

- $1 \leq N \leq 150000$
- $0 \leq A_i \leq 5 \times 10^8 \ (0 \leq i \leq 2N-1)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_0$ $A_1$ $\cdots$ $A_{2N-1}$

## Output

Print the minimum number of strawberries that should be put on the whole cake to fulfill the requests of the friends.

```input1
3
2 5 7 4 2 1
```

```output1
8
```

Consider the case we put $1, 0, 1, 4, 2, 0$ strawberries on Pieces $0, 1, 2, 3, 4, 5$, respectively.

In this case, all requests of the friends are fulfilled, as follows:

- Friend $0$: Pieces $0, 1, 2$ have a total of $2$ strawberries on them, which is not less than $A_0 = 2$.
- Friend $1$: Pieces $1, 2, 3$ have a total of $5$ strawberries on them, which is not less than $A_1 = 5$.
- Friend $2$: Pieces $2, 3, 4$ have a total of $7$ strawberries on them, which is not less than $A_2 = 7$.
- Friend $3$: Pieces $3, 4, 5$ have a total of $6$ strawberries on them, which is not less than $A_3 = 4$.
- Friend $4$: Pieces $4, 5, 0$ have a total of $3$ strawberries on them, which is not less than $A_4 = 2$.
- Friend $5$: Pieces $5, 0, 1$ have a total of $1$ strawberry on them, which is not less than $A_5 = 1$.

Thus, we can fulfill all requests of the friends by putting a total of $8$ strawberries on the cake.
This is the minimum number of strawberries needed.

```input2
3
8 0 6 0 9 0
```

```output2
12
```

Consider the case we put $6, 0, 2, 1, 3, 0$ strawberries on Pieces $0, 1, 2, 3, 4, 5$, respectively.

In this case, all requests of the friends are fulfilled, as follows:

- Friend $0$: Pieces $0, 1, 2$ have a total of $8$ strawberries on them, which is not less than $A_0 = 8$.
- Friend $1$: Pieces $1, 2, 3$ have a total of $3$ strawberries on them, which is not less than $A_1 = 0$.
- Friend $2$: Pieces $2, 3, 4$ have a total of $6$ strawberries on them, which is not less than $A_2 = 6$.
- Friend $3$: Pieces $3, 4, 5$ have a total of $4$ strawberries on them, which is not less than $A_3 = 0$.
- Friend $4$: Pieces $4, 5, 0$ have a total of $9$ strawberries on them, which is not less than $A_4 = 9$.
- Friend $5$: Pieces $5, 0, 1$ have a total of $6$ strawberries on them, which is not less than $A_5 = 0$.

Thus, we can fulfill all requests of the friends by putting a total of $12$ strawberries on the cake.
This is the minimum number of strawberries needed.

```input3
5
3 1 5 7 0 8 4 6 4 9
```

```output3
12
```

We can put $0, 0, 0, 4, 0, 1, 1, 1, 0, 5$ strawberries on Pieces $0, 1, \dots, 9$, respectively, to fulfill all requests of the friends.

In this case, there is a total of $12$ strawberries on the cake, which is the minimum number of strawberries needed.

```input4
1
267503 601617
```

```output4
869120
```

We can put $267503$ strawberries on Piece $0$ and $601617$ strawberries on Piece $1$ to fulfill all requests of the friends.

```input5
8
418940906 38034755 396064111 43044067 356084286 61548818 15301658 35906016 20933120 211233791 30314875 25149642 42550552 104690843 81256233 63578117
```

```output5
513119404
```