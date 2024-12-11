Score : $400$ points

## Problem Statement

Takahashi is playing with toy trains, connecting and disconnecting them.<br>
There are $N$ toy train cars, with car numbers: Car $1$, Car $2$, $\ldots$, Car $N$.<br>
Initially, all cars are separated.

You will be given $Q$ queries. Process them in the order they are given.
There are three kinds of queries, as follows.

- <p>`1 x y`: Connect the front of Car $y$ to the rear of Car $x$.<br>
It is guaranteed that:</p>
-   - $x \neq y$
-   - just before this query, no train is connected to the rear of Car $x$;
-   - just before this query, no train is connected to the front of Car $y$;
-   - just before this query, Car $x$ and Car $y$ belong to different connected components.
- <p>`2 x y`: Disconnect the front of Car $y$ from the rear of Car $x$.<br>
It is guaranteed that:</p>
-   - $x \neq y$;
-   - just before this query, the front of Car $y$ is directly connected to the rear of Car $x$.
- <p>`3 x`: Print the car numbers of the cars belonging to the connected component containing Car $x$, **from front to back**. </p>

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq Q \leq 10^5$
- $1 \leq x \leq N$
- $1 \leq y \leq N$
- All values in input are integers.
- All queries satisfy the conditions in the Problem Statement.
- The queries of the format `3 x` ask to print at most $10^6$ car numbers in total.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

The $i$-th query $\mathrm{query}_i$ begins with an integer $c_i$ ($1$, $2$, or $3$) representing the kind of the query, followed by $x$ and $y$ if $c_i = 1$ or $2$, and followed by $x$ if $c_i = 3$.

In short, each query is in one of the following three formats:

> $1$ $x$ $y$
> $2$ $x$ $y$
> $3$ $x$

## Output

If a query with $c_i = 3$ asks to print the values $j_1, j_2, \ldots, j_M$, output the following line:

> $M$ $j_1$ $j_2$ $\ldots$ $j_M$

Your output should consist of $q$ lines, where $q$ is the number of queries with $c_i = 3$.<br>
The $k$-th line $(1 \leq k \leq q)$ should contain the response to the $k$-th such query.

```input1
7 14
1 6 3
1 4 1
1 5 2
1 2 7
1 3 5
3 2
3 4
3 6
2 3 5
2 4 1
1 1 5
3 2
3 4
3 6
```

```output1
5 6 3 5 2 7
2 4 1
5 6 3 5 2 7
4 1 5 2 7
1 4
2 6 3
```

The figure below shows the cars when the first $5$ queries are processed.<br>
For example, Car $2$ belongs to the same connected component as Cars $3, 5, 6, 7$, which is different from the connected component containing Cars $1, 4$.

![](https://img.atcoder.jp/ghi/dbfd2666776e351752bba67e9b65fafa.png)

The figure below shows the cars when the first $11$ queries are processed.  

![](https://img.atcoder.jp/ghi/dad814ca77ec58f31cb88c62b9825bef.png)