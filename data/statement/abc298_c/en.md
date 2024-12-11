Score : $300$ points

## Problem Statement

We have $N$ boxes numbered $1$ to $N$ that are initially empty, and an unlimited number of blank cards.<br>
Process $Q$ queries in order. There are three kinds of queries as follows.

- `1 i j` $\colon$ Write the number $i$ on a blank card and put it into box $j$.
- `2 i` $\colon$ Report all numbers written on the cards in box $i$, **in ascending order**.
- `3 i` $\colon$ Report all box numbers of the boxes that contain a card with the number $i$, **in ascending order**.

Here, note the following.

- In a query of the second kind, if box $i$ contains multiple cards with the same number, that number should be printed the number of times equal to the number of those cards.
- In a query of the third kind, even if a box contains multiple cards with the number $i$, the box number of that box should be printed only once.

## Constraints

- $1 \leq N, Q \leq 2 \times 10^5$
- For a query of the first kind:-   - $1 \leq i \leq 2 \times 10^5$
-   - $1 \leq j \leq N$
- For a query of the second kind:-   - $1 \leq i \leq N$
-   - Box $i$ contains some cards when this query is given.
- For a query of the third kind:-   - $1 \leq i \leq 2 \times 10^5$
-   - Some boxes contain a card with the number $i$ when this query is given.
- At most $2 \times 10^5$ numbers are to be reported.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $Q$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Here, $\mathrm{query}_q$ denotes the $q$-th query, which is in one of the following formats:

> $1$ $i$ $j$
> $2$ $i$
> $3$ $i$

## Output

Respond to the queries of the second and third kinds in order.<br>
For each of those queries, print one line containing the elements to be reported **in ascending order**, with spaces in between.

```input1
5
8
1 1 1
1 2 4
1 1 4
2 4
1 1 4
2 4
3 1
3 2
```

```output1
1 2
1 1 2
1 4
4
```

Let us process the queries in order.

- Write $1$ on a card and put it into box $1$.
- Write $2$ on a card and put it into box $4$.
- Write $1$ on a card and put it into box $4$.
- Box $4$ contains cards with the numbers $1$ and $2$.-   - Print $1$ and $2$ in this order.
- Write $1$ on a card and put it into box $4$.
- Box $4$ contains cards with the numbers $1$, $1$, and $2$.-   - Note that you should print $1$ twice.
- Boxes $1$ and $4$ contain a card with the number $1$.-   - Note that you should print $4$ only once, even though box $4$ contains two cards with the number $1$.
- Boxes $4$ contains a card with the number $2$.

```input2
1
5
1 1 1
1 2 1
1 200000 1
2 1
3 200000
```

```output2
1 2 200000
1
```