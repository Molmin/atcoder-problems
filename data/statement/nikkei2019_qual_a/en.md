Score : $100$ points

## Problem Statement

We conducted a survey on newspaper subscriptions.
More specifically, we asked each of the $N$ respondents the following two questions:

- Question $1$: Are you subscribing to Newspaper X?
- Question $2$: Are you subscribing to Newspaper Y?

As the result, $A$ respondents answered "yes" to Question $1$, and $B$ respondents answered "yes" to Question $2$.

What are the maximum possible number and the minimum possible number of respondents subscribing to both newspapers X and Y?

Write a program to answer this question.

## Constraints

- $1 \leq N \leq 100$
- $0 \leq A \leq N$
- $0 \leq B \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

Print the maximum possible number and the minimum possible number of respondents subscribing to both newspapers, in this order, with a space in between.

```input1
10 3 5
```

```output1
3 0
```

In this sample, out of the $10$ respondents, $3$ answered they are subscribing to Newspaper X, and $5$ answered they are subscribing to Newspaper Y.

Here, the number of respondents subscribing to both newspapers is at most $3$ and at least $0$.

```input2
10 7 5
```

```output2
5 2
```

In this sample, out of the $10$ respondents, $7$ answered they are subscribing to Newspaper X, and $5$ answered they are subscribing to Newspaper Y.

Here, the number of respondents subscribing to both newspapers is at most $5$ and at least $2$.

```input3
100 100 100
```

```output3
100 100
```