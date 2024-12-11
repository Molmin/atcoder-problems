Score : $500$ points

## Problem Statement

In the Republic of AtCoder, there are $N$ towns numbered $1$ through $N$ and $M$ roads numbered $1$ through $M$.<br>
Road $i$ is a one-way road from Town $A_i$ to Town $B_i$, and it takes $C_i$ minutes to go through. It is possible that $A_i = B_i$, and there may be multiple roads connecting the same pair of towns.<br>
Takahashi is thinking about taking a walk in the country. We will call a walk **valid** when it goes through one or more roads and returns to the town it starts at.<br>
For each town, determine whether there is a valid walk that starts at that town. Additionally, if the answer is yes, find the minimum time such a walk requires.

## Constraints

- $1 \le N \le 2000$
- $1 \le M \le 2000$
- $1 \le A_i \le N$
- $1 \le B_i \le N$
- $1 \le C_i \le 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $A_3$ $B_3$ $C_3$
> 
> $\hspace{25pt} \vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

Print $N$ lines. The $i$-th line $(1 \le i \le N)$ should contain the following:

- if there is a valid walk that starts at Town $i$, the minimum time required by such a walk;
- otherwise, `-1`.

```input1
4 4
1 2 5
2 3 10
3 1 15
4 3 20
```

```output1
30
30
30
-1
```

By Roads $1, 2, 3$, Towns $1, 2, 3$ forms a ring that takes $30$ minutes to go around.<br>
From Town $4$, we can go to Towns $1, 2, 3$, but then we cannot return to Town $4$.

```input2
4 6
1 2 5
1 3 10
2 4 5
3 4 10
4 1 10
1 1 10
```

```output2
10
20
30
20
```

There may be a road such that $A_i = B_i$.<br>
Here, we can use just Road $6$ to depart from Town $1$ and return to that town.

```input3
4 7
1 2 10
2 3 30
1 4 15
3 4 25
3 4 20
4 3 20
4 3 30
```

```output3
-1
-1
40
40
```

Note that there may be multiple roads connecting the same pair of towns.