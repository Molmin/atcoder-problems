Score : $500$ points

## Problem Statement

<font color="red">**This is an interactive task.**</font>

Let $N$ be an odd number at least $3$.

There are $N$ seats arranged in a circle.
The seats are numbered $0$ through $N-1$.
For each $i$ ($0 \leq i \leq N - 2$), Seat $i$ and Seat $i + 1$ are adjacent.
Also, Seat $N - 1$ and Seat $0$ are adjacent.

Each seat is either vacant, or oppupied by a man or a woman.
However, no two adjacent seats are occupied by two people of the same sex.
It can be shown that there is at least one empty seat where $N$ is an odd number at least $3$.

You are given $N$, but the states of the seats are not given.
Your objective is to correctly guess the ID number of any one of the empty seats.
To do so, you can repeatedly send the following query:

- Choose an integer $i$ ($0 \leq i \leq N - 1$). If Seat $i$ is empty, the problem is solved. Otherwise, you are notified of the sex of the person in Seat $i$.

Guess the ID number of an empty seat by sending at most $20$ queries.

## Constraints

- $N$ is an odd number.
- $3 \leq N \leq 99$ $999$

## Input and Output

First, $N$ is given from Standard Input in the following format:

```plain
$N$
```

Then, you should send queries.
A query should be printed to Standart Output in the following format.
Print a newline at the end.

```plain
$i$
```

The response to the query is given from Standard Input in the following format:

```plain
$s$
```

Here, $s$ is `Vacant`, `Male` or `Female`.
Each of these means that Seat $i$ is empty, occupied by a man and occupied by a woman, respectively.

## Notice

- Flush Standard Output each time you print something. Failure to do so may result in `TLE`.
- Immediately terminate the program when $s$ is `Vacant`. Otherwise, the verdict is indeterminate.
- The verdict is indeterminate if more than $20$ queries or ill-formatted queries are sent.

## Sample Input / Output 1

In this sample, $N = 3$, and Seat $0$, $1$, $2$ are occupied by a man, occupied by a woman and vacant, respectively.

InputOutput

3
0
Male
1
Female
2
Vacant