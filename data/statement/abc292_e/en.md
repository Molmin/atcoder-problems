Score : $500$ points

## Problem Statement

You are given a simple directed graph with $N$ vertices numbered $1$ to $N$ and $M$ edges numbered $1$ to $M$. Edge $i$ is a directed edge from vertex $u_i$ to vertex $v_i$.

You may perform the following operation zero or more times.

- Choose distinct vertices $x$ and $y$ such that there is no directed edge from vertex $x$ to vertex $y$, and add a directed edge from vertex $x$ to vertex $y$.

Find the minimum number of times you need to perform the operation to make the graph satisfy the following condition.

- For every triple of distinct vertices $a$, $b$, and $c$, if there are directed edges from vertex $a$ to vertex $b$ and from vertex $b$ to vertex $c$, there is also a directed edge from vertex $a$ to vertex $c$.

## Constraints

- $3 \leq N \leq 2000$
- $0 \leq M \leq 2000$
- $1 \leq u_i ,v_i \leq N$
- $u_i \neq v_i$
- $(u_i,v_i) \neq (u_j,v_j)$ if $i \neq j$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

Print the answer.

```input1
4 3
2 4
3 1
4 3
```

```output1
3
```

Initially, the condition is not satisfied because, for instance, for vertices $2$, $4$, and $3$, there are directed edges from vertex $2$ to vertex $4$ and from vertex $4$ to vertex $3$, but not from vertex $2$ to vertex $3$.

You can make the graph satisfy the condition by adding the following three directed edges:

- one from vertex $2$ to vertex $3$,
- one from vertex $2$ to vertex $1$, and
- one from vertex $4$ to vertex $1$.

On the other hand, the condition cannot be satisfied by adding two or fewer edges, so the answer is $3$.

```input2
292 0
```

```output2
0
```

```input3
5 8
1 2
2 1
1 3
3 1
1 4
4 1
1 5
5 1
```

```output3
12
```