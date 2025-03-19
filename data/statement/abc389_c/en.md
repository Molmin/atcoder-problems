Score : $300$ points

## Problem Statement

There is a queue of snakes. Initially, the queue is empty.

You are given $Q$ queries, which should be processed in the order they are given. There are three types of queries:

- Type $1$: Given in the form `1 l`. A snake of length $l$ is added to the end of the queue. If the queue was empty before adding, the head position of the newly added snake is $0$; otherwise, it is the sum of the head coordinate of the last snake in the queue and the last snake’s length.
- Type $2$: Given in the form `2`. The snake at the front of the queue leaves the queue. It is guaranteed that the queue is not empty at this time. Let $m$ be the length of the snake that left, then the head coordinate of every snake remaining in the queue decreases by $m$.
- Type $3$: Given in the form `3 k`. Output the head coordinate of the snake that is $k$-th from the front of the queue. It is guaranteed that there are at least $k$ snakes in the queue at this time.

## Constraints

- $1 \leq Q \leq 3 \times 10^{5}$
- For a query of type $1$, $1 \leq l \leq 10^{9}$
- For a query of type $2$, it is guaranteed that the queue is not empty.
- For a query of type $3$, let $n$ be the number of snakes in the queue, then $1 \leq k \leq n$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $Q$
> 
> $\text{query}_1$
> 
> $\text{query}_2$
> 
> $\vdots$
> 
> $\text{query}_Q$

Here, $\text{query}_i$ is the $i$-th query in one of the following forms:

> $1$ $l$

> $2$

> $3$ $k$

## Output

Let $q$ be the number of queries of type $3$. Print $q$ lines. The $i$-th line should contain the answer to the $i$-th type $3$ query.

```input1
7
1 5
1 7
3 2
1 3
1 4
2
3 3
```

```output1
5
10
```

- 1st query: A snake of length $5$ is added to the queue. Since the queue was empty, the head coordinate of this snake is $0$.
- 2nd query: A snake of length $7$ is added to the queue. Before adding, the last snake has head coordinate $0$ and length $5$, so the newly added snake’s head coordinate is $5$.
- 3rd query: Output the head coordinate of the snake that is 2nd from the front. Currently, the head coordinates of the snakes in order are $0, 5$, so output $5$.
- 4th query: A snake of length $3$ is added to the queue. Before adding, the last snake has head coordinate $5$ and length $7$, so the new snake’s head coordinate is $12$.
- 5th query: A snake of length $4$ is added to the queue. Before adding, the last snake has head coordinate $12$ and length $3$, so the new snake’s head coordinate is $15$.
- 6th query: The snake at the front leaves the queue. The length of the snake that left is $5$, so the head coordinate of each remaining snake decreases by $5$. The remaining snake’s head coordinate becomes $0, 7, 10$.
- 7th query: Output the head coordinate of the snake that is 3rd from the front. Currently, the head coordinates of the snakes in order are $0, 7, 10$, so output $10$.

```input2
3
1 1
2
1 3
```

```output2

```

It is possible that there are no queries of type $3$.

```input3
10
1 15
1 10
1 5
2
1 5
1 10
1 15
2
3 4
3 2
```

```output3
20
5
```