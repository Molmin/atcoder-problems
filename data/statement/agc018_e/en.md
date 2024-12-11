Score : $1600$ points

## Problem Statement

Joisino is planning on touring Takahashi Town.
The town is divided into square sections by north-south and east-west lines.
We will refer to the section that is the $x$-th from the west and the $y$-th from the north as $(x,y)$.

Joisino thinks that a *touring plan* is good if it satisfies the following conditions:

- <p>Let $(p,q)$ be the section where she starts the tour. Then, $X_1 \leq p \leq X_2$ and $Y_1 \leq q \leq Y_2$ hold.</p>
- <p>Let $(s,t)$ be the section where she has lunch. Then, $X_3 \leq s \leq X_4$ and $Y_3 \leq t \leq Y_4$ hold.</p>
- <p>Let $(u,v)$ be the section where she ends the tour. Then, $X_5 \leq u \leq X_6$ and $Y_5 \leq v \leq Y_6$ hold.</p>
- <p>By repeatedly moving to the adjacent section (sharing a side), she travels from the starting section to the ending section in the shortest distance, passing the lunch section on the way.</p>

Two touring plans are considered different if at least one of the following is different: the starting section, the lunch section, the ending section, and the sections that are visited on the way.
Joisino would like to know how many different good touring plans there are.
Find the number of the different good touring plans.
Since it may be extremely large, find the count modulo $10^9+7$.

## Constraints

- $1 \leq X_1 \leq X_2 &lt; X_3 \leq X_4 &lt; X_5 \leq X_6 \leq 10^6$
- $1 \leq Y_1 \leq Y_2 &lt; Y_3 \leq Y_4 &lt; Y_5 \leq Y_6 \leq 10^6$

## Input

Input is given from Standard Input in the following format:

> $X_1$ $X_2$ $X_3$ $X_4$ $X_5$ $X_6$
> 
> $Y_1$ $Y_2$ $Y_3$ $Y_4$ $Y_5$ $Y_6$

## Output

Print the number of the different good touring plans, modulo $10^9+7$.

```input1
1 1 2 2 3 4
1 1 2 2 3 3
```

```output1
10
```

The starting section will always be $(1,1)$, and the lunch section will always be $(2,2)$.
There are four good touring plans where $(3,3)$ is the ending section, and six good touring plans where $(4,3)$ is the ending section.
Therefore, the answer is $6+4=10$.

```input2
1 2 3 4 5 6
1 2 3 4 5 6
```

```output2
2346
```

```input3
77523 89555 420588 604360 845669 973451
2743 188053 544330 647651 709337 988194
```

```output3
137477680
```