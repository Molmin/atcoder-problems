Score : $500$ points

## Problem Statement

There are $N$ balls, called Ball $1$ through $N$, on a number line.<br>
Ball $i$ is at the coordinate $X_i$.<br>
Each ball has a color represented by an integer ID between $1$ and $N$ (inclusive); the ID of the color of Ball $i$ is $C_i$.<br>
You are now at the coordinate $0$. You will collect all the balls by moving along the line at the speed of $1$ per second, and then return to the coordinate $0$.<br>
Here, you have to collect the balls in a non-descending order of their IDs.<br>
When collecting a ball, you have to be at the coordinate of that ball, but it is not mandatory to collect it when you are there.<br>
Find the minimum time needed to start at the coordinate $0$, collect all the balls, and return to the coordinate $0$.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $|X_i| \le 10^9$
- $X_i \neq X_j (i \neq j)$
- $X_i \neq 0$
- $1 \le C_i \le N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $C_1$
> 
> $X_2$ $C_2$
> 
> $X_3$ $C_3$
> 
> $\hspace{15pt} \vdots$
> 
> $X_N$ $C_N$

## Output

Print the number of seconds needed.

```input1
5
2 2
3 1
1 3
4 2
5 3
```

```output1
12
```

The optimal strategy is:

- spend $3$ seconds to reach the coordinate $3$ and collect Ball $2$;
- spend $1$ second to reach the coordinate $2$ and collect Ball $1$;
- spend $2$ seconds to reach the coordinate $4$ and collect Ball $4$;
- spend $1$ second to reach the coordinate $5$ and collect Ball $5$;
- spend $4$ seconds to reach the coordinate $1$ and collect Ball $3$;
- spend $1$ second to return to the coordinate $0$.

Here, we collected the balls in a non-descending order of their IDs: $1, 2, 2, 3, 3$.

```input2
9
5 5
-4 4
4 3
6 3
-5 5
-3 2
2 2
3 3
1 4
```

```output2
38
```